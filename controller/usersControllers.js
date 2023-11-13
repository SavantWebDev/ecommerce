const express = require("express");
const router = express.Router();
const knex = require("../Database/connection");
const auth = require("../middleware/auth");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const { v4: uuidv4 } = require('uuid')

router.get("/usuarios", auth, async (req, res) => {
    var error = req.flash('error')
    var success = req.flash("success")

    error = error == undefined || error.length == 0 ? undefined : error;
    success = success == undefined || success.length == 0 ? undefined : success;

    try {

        var funcoes = await knex.raw(`SELECT * FROM tb_funcao`)

        var users = await knex.raw(
            `SELECT * FROM users u
             INNER JOIN tb_funcao tf
              ON u.funcao = tf.idfuncao`
        )


        if (users.rows[0] != undefined) {
            res.render("usuarios", {
                username: req.session.user,
                funcao: req.session.funcao,
                usuarios: users.rows,
                funcoes: funcoes.rows,
                error: error,
                success: success
            });
        } else {
            var error = 'Ocorreu um erro.'
            req.flash('error', error)
            res.redirect('/usuarios')
        }
    } catch (e) {
        var error = 'Ocorreu um erro.'
        req.flash('error', error)
        res.redirect('/usuarios')
    }

});

router.post('/adc-users', auth, async (req, res) => {
    var { nomeusuario, senha, funcao, email } = req.body
    var id = uuidv4()

    try {

        var exist = await knex.raw(`SELECT * FROM users WHERE email = '${email}'`)
        console.log(exist.rows[0])

        if (exist.rows[0] != undefined) {
            var error = 'Email já cadastrado!'
            req.flash('error', error)
            return res.redirect('/usuarios')
        } else {
            await knex.raw(`INSERT INTO users VALUES ('${id}', '${email}', '${senha}', '${nomeusuario}', ${funcao})`)
                .then(() => {
                    var success = 'Usuário criado com sucesso!'
                    req.flash('success', success)
                    res.redirect('/usuarios')
                })
                .catch(e => {
                    console.log(e)
                    var error = 'Erro em tentar criar usuário.'
                    req.flash('error', error)
                    res.redirect('/usuarios')
                })
        }
    } catch (e) {
        var error = 'Ocorreu um erro.'
        req.flash('error', error)
        res.redirect('/usuarios')
    }
})

router.get('/del-user', auth, async (req, res) => {
    var { id } = req.query

    await knex.raw(
        `DELETE FROM users WHERE id = '${id}'`
    )
        .then(() => {
            var success = 'Usuário deletado com sucesso!'
            req.flash('success', success)
            res.redirect('/usuarios')
        })
        .catch(e => {
            var error = 'Error em deletar usuário!'
            req.flash('error', error)
            res.redirect('/usuarios')
        })
})

module.exports = router