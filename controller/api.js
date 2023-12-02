const knex = require('../Database/connection')
const express = require('express')
const router = express.Router()
const validator = require('validator')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const apiURL = '/v1/api'

const auth = require('../middleware/jwt')

router.get(apiURL + '/produtos', async (req, res) => {

    var firstArray = await knex.raw(
        `SELECT * FROM estoque LIMIT 8 OFFSET 0`
    )

    var secondArray = await knex.raw(
        `SELECT * FROM estoque LIMIT 8 OFFSET 8`
    )

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

    var exist = await knex.raw(`SELECT * FROM tb_clientes WHERE email = '${email}' OR cpf = '${cpf}'`)
    //console.log(exist.rows)
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
                    INSERT INTO tb_clientes VALUES('${id}', '${email}', '${hash}', '${cpf}', '${celular}', '${nascimento}', '${nome}', '${notificacao}')
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

router.post(apiURL + '/sell-product', async (req, res) => {
    var { product, valorTotal, cpf } = req.body

    console.log(product, valorTotal)
    var qnt = 0;
    for (var i = 0; product.length > i; i++) {
        qnt += parseFloat((product[i].valor).replace(',', '.'))
    }

    console.log(qnt.toString().replace('.', ','))

    res.status(200).json({ itensEnviados: [{ "product": product, "valorTotal": valorTotal, "cpf": cpf }] })
})

router.get(apiURL + '/usuario', auth, async (req, res) => {
    res.status(200).json({ email: req.session.email, username: req.session.user })
})

router.post(apiURL + '/card', auth, async (req, res) => {
    var { ean, qnt } = req.body


})

module.exports = router