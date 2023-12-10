const knex = require('../Database/connection')
const express = require('express')
const router = express.Router()
const validator = require('validator')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const apiURL = '/v1/api'

const verifyJWT = require('../middleware/jwt')

const auth = require('../middleware/jwt')

router.get(apiURL + '/produtos', async (req, res) => {

    var firstArray = await knex.raw(
        `SELECT ean, valor, nomeproduto, descricao, qnt, idcategoria,
        CASE
            WHEN image = '/src/image/imagemImagem.png'
            THEN 'https://api-n56x.onrender.com/src/image/imagemImagem.png'
            ELSE replace(image, 'uploads', 'https://api-n56x.onrender.com/uploads')
        END as image,
        id FROM estoque LIMIT 8 OFFSET 0`
    )

    var secondArray = await knex.raw(
        `SELECT ean, valor, nomeproduto, descricao, qnt, idcategoria,
        CASE
            WHEN image = '/src/image/imagemImagem.png'
            THEN 'https://api-n56x.onrender.com/src/image/imagemImagem.png'
            ELSE replace(image, 'uploads', 'https://api-n56x.onrender.com/uploads')
        END as image,
        id FROM estoque LIMIT 8 OFFSET 8`
    )

    firstArray.rows.forEach(first => {
        first.descricao = first.descricao.replace('\r\n', '<br>')
    })

    //console.log(firstArray.rows[0]['descricao'].includes('\r\n'))
    console.log('-----')

    res.status(200).json({
        firstProduct: firstArray.rows,
        secondProduct: secondArray.rows
    })
})

//Procurar produto específico pelo código de barras
router.get(apiURL + '/produtos/:ean', async (req, res) => {

    var { ean } = req.params;
    console.log(ean)
    await knex.raw(`
        SELECT ean, nomeproduto, image, descricao, valor, nomecategoria
        FROM estoque e
		INNER JOIN tb_categorias tc
		ON e.idcategoria = tc.idcategoria
        WHERE ean = '${ean}'
    `)
        .then(result => {
            if (result.rows[0] != undefined) {
                res.status(200).json(result.rows[0])
            } else {
                res.status(404).json({ error: 'Not Found' })
            }
        })
        .catch(e => {
            console.log(e)
            res.status(400).json({ error: 'error' })
        })

})

router.get(apiURL + '/search', async (req, res) => {
    var { nomeproduto, page } = req.query

    var limit = 16

    var totalpaginas = await knex.raw('SELECT CEILING(CAST(COUNT(*) as numeric(18, 2)) / CAST(' + limit + ' as numeric(18, 2))) as totalpaginas FROM estoque')

    page < 1 || page == undefined ? page = 1 : page > totalpaginas.rows[0]['totalpaginas'] ? page = totalpaginas.rows[0]['totalpaginas'] : page = page

    var pg = limit * (page - 1)

    await knex.raw(`
            SELECT ean, nomeproduto, image,
            CASE
                WHEN descricao = '' THEN 'Sem Descrição'
                ELSE descricao
            END, valor, nomecategoria
                    FROM estoque e
                    INNER JOIN tb_categorias tc
                    ON e.idcategoria = tc.idcategoria
                    WHERE nomeproduto LIKE '%${nomeproduto.toUpperCase()}%'
                    OR nomecategoria LIKE '%${nomeproduto}%'
                    LIMIT ${limit} OFFSET ${pg}
    `)
        .then(response => {
            if (response.rows[0] == undefined) {
                console.log(response)
                res.json({ error: "Without Page" })
            } else {
                res.json(response.rows)
            }
        })
        .catch(e => {
            console.log(e)
            res.status(400).json({ error: "Error" })
        })
})

router.post(apiURL + '/login', async (req, res) => {
    var { email, senha } = req.body

    var conf = await knex('tb_clientes').select().where({ email: email })
    console.log(conf[0])

    if (conf[0] != undefined) {
        var correct = bcrypt.compareSync(senha, conf[0].pass)
        if (correct) {
            const token = jwt.sign(
                {
                    email: conf[0].email,
                    username: conf[0].username
                },
                process.env.SECRET,
                {
                    expiresIn: '86400s'
                }
            )
            res.status(201).json({ msg: "Usuário logado", token })
        } else {
            res.status(400).json({ msg: "Credenciais Incorretas" })
        }
    } else {
        res.status(404).json({ msg: "Credenciais Incorretas" })
    }
})

router.post(apiURL + '/cadastrar', async (req, res) => {
    var { email, senha, celular, nascimento, cpf, notificacao, nome } = req.body

    if (!cpf.includes('-') || !cpf.includes('.')) {
        console.log(cpf)
        var primeiroDigito = cpf.substring(0, 3)
        var segundoDigito = cpf.substring(3, 6)
        var terceiroDigito = cpf.substring(6, 9)
        console.log(primeiroDigito)
        console.log(segundoDigito)
        var cpfCompleto = primeiroDigito + '.' + segundoDigito + '.' + terceiroDigito + '-' + cpf.substring(9, 11)
    } else {
        var cpfCompleto = cpf
    }

    var exist = await knex.raw(`SELECT * FROM tb_clientes WHERE email = '${email}' OR cpf = '${cpf}'`)
    console.log(exist.rows[0])
    var idade = moment().subtract(18, 'years').format('YYYY')
    if (!(nascimento.split('-')[0] <= idade)) {
        return res.status(400).json({ msg: "Idade Inválida!" })
    }
    if (exist.rows[0] == undefined) {
        if (validator.isEmail(email)) {
            if (validator.isMobilePhone(celular)) {

                var id = uuidv4()
                var salt = bcrypt.genSaltSync(10)
                var hash = bcrypt.hashSync(senha, salt)
                await knex.raw(`
                    INSERT INTO tb_clientes VALUES('${id}', '${email}', '${hash}', '${cpfCompleto}', '${celular}', '${nascimento}', '${nome}', '${notificacao}')
                `)
                    .then(() => {
                        res.status(200).json({ msg: "Sucesso" })
                    })
                    .catch(e => {
                        console.log(e)
                        res.status(400).json({ msg: "Error" })
                    })
            } else {
                res.status(400).json({ msg: "Telefone Inválido!" })
            }
        } else {
            res.status(400).json({ msg: "Email Inválido!" })
        }
    } else {
        res.status(400).json({ msg: "Usuário já Cadastrado!" })
    }

})

router.get(apiURL + '/categorias', async (req, res) => {
    var categorias = await knex.raw(`
        SELECT nomecategoria FROM tb_categorias
    `)

    if (categorias.rows[0] == undefined) {
        return res.status(200).json({ 'categorias': null })
    } else {
        return res.status(200).json({
            'categorias': categorias.rows.map(category => category['nomecategoria'])
        })
    }


})

router.post(apiURL + '/sell-product', auth, async (req, res) => {
    var { product, valorTotal, cpf } = req.body

    console.log(product, valorTotal, cpf)
    var valorTotal = 0

    if (cpf != undefined) {
        var idcliente = await knex.raw(`
            SELECT idcliente FROM tb_clientes WHERE cpf = '${cpf}'
        `)

        if (idcliente.rows[0] == undefined || idcliente.rows[0] == '' || idcliente.rows[0].length == 0) {
            idcliente.rows[0] = "0b982466-96b2-40c9-bb83-7f0243ace5e1"
        }
    }

    for (var i = 0; product.length > i; i++) {
        var valorTotalProduto = 0;
        valorTotalProduto += parseFloat((product[i].precounitario).replace(',', '.')) * product[i].qnt
        valorTotal += valorTotalProduto

        valorTotalProduto = valorTotalProduto.toString().replace('.', ',')

        console.log('Produto Passado: ' + product[i].ean)
        console.log('CPF: ' + cpf)
        console.log('Quantidade: ' + product[i].qnt)
        console.log('Valor: ' + product[i].valor)
        console.log('Valor Total Produto: ' + valorTotalProduto)
        console.log('-------------------------------------')
        //console.log(moment().format('YYYY-MM-DD'))
        await knex.raw(
            `INSERT INTO tb_vendas 
            VALUES (${product[i].ean}, ${product[i].qnt}, '${product[i].valor}', '${moment().format('YYYY-MM-DD')}', '${idcliente.rows[0]['idcliente'] == undefined ? idcliente.rows[0] : idcliente.rows[0]['idcliente']}')`
        ).then(() => {
            console.log('Produto vendido com sucesso.')
        }).catch(e => console.log(e))

        /* if (i == product.length - 1) {
            console.log('Valor Total: ' + valorTotal)
        } */
    }

    res.status(200).json({ itensEnviados: [{ "product": product, "valorTotal": valorTotal, "cpf": cpf }] })
})

router.get(apiURL + '/usuario', auth, async (req, res) => {
    res.status(200).json({ email: req.session.email, username: req.session.user })
})

router.get(apiURL + '/perfil', verifyJWT, async (req, res) => {
    await knex.raw(`
        SELECT * FROM tb_clientes WHERE email = '${req.session.email}' AND username = '${req.session.user}'
    `)
        .then(async resultQuery => {
            console.log(resultQuery.rows[0]['idcliente'])
            var pedidos = await knex.raw(`
                SELECT eanproduto, qntvendido, datavenda FROM tb_vendas tv INNER JOIN tb_clientes tc
                ON tv.uuiduser = tc.idcliente WHERE tv.uuiduser = '${resultQuery.rows[0]['idcliente']}'
                ORDER BY datavenda DESC
                LIMIT 20
            `)

            res.json({
                usuario:
                {
                    email: resultQuery.rows[0].email,
                    cpf: resultQuery.rows[0].cpf,
                    celular: resultQuery.rows[0].celular,
                    nascimento: resultQuery.rows[0].nascimento,
                    username: resultQuery.rows[0].username
                },
                endereco: {},
                ultimosPedidos: pedidos.rows,
                totalPedidos: pedidos.rows.length
            })
        })
        .catch(e => {
            console.log(e)
            res.status(400).json(e)
        })
})

router.post(apiURL + '/card', auth, async (req, res) => {
    var { ean, qnt } = req.body

    console.log(ean)
    console.log(qnt)
})

module.exports = router