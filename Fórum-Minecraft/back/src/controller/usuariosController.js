const conDB = require('../dao/dbForum.js');
const Usuarios = require('../models/usuarios')
require('dotenv').config();

const jwt = require('jsonwebtoken');

const listarUsuarios = (req, res) => {
    conDB.query(Usuarios.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

const listarUsuario = (req, res) => {
    conDB.query(Usuarios.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

const cadastrarUsuarios = (req, res) => {
    conDB.query(Usuarios.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const Credenciais = (req, res) => {
    conDB.query(Usuarios.credenciais(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const excluirUsuarios = (req, res) => {
    conDB.query(Usuarios.toDel(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(204).end();
        } else {
            res.status(400).end();
        }
    });
};

const editarUsuarios = (req, res) => {
    conDB.query(Usuarios.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const login = (req, res) => {
    console.log(req.body)
    conDB.query(Usuarios.toLogin(req.body), (err, result) => {
        if (err == null) {
            console.log(result);
            let data = {
                "id_user": result[0].id_user,
                "nome_user": result[0].nome_user,
                "nickname": result[0].nickname,
                "email": result[0].email,
                "senha":result[0].senha,
                "status_user":result[0].status_user
            }

            jwt.sign(data, process.env.KEY, { expiresIn: '20m' }, (erro, token) => {
                if (erro == null) {
                    data["token"] = token
                    res.status(200).json(data).end();
                } else {

                    res.status(404).json(err).end();
                }
            });
        }else{
            res.status(400).json(err).end()
        }
    })
}

const listarName = (req, res) => {
    conDB.query(Usuarios.toName(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};







const remover = (req, res, next) => {
    const { id } = req.params;
    res.status(200).json({ msg: "usuario deletado" }).end()
}

module.exports = {
    listarUsuarios,
    excluirUsuarios,
    cadastrarUsuarios,
    editarUsuarios,
    listarUsuario,
    Credenciais,
    login,
    remover,
    listarName
}