const conDB = require('../dao/dbForum.js');
const Usuarios = require('../models/usuarios')
require('dotenv').config();

const jwt = require('jsonwebtoken');

const listarUsuarios = (req, res) => {
    conDB.query(Usuarios.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const listarUsuario = (req, res) => {
    conDB.query(Usuarios.toRead(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const cadastrarUsuarios = (req, res) => {
    conDB.query(Usuarios.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const Credenciais = (req, res) => {
    conDB.query(Usuarios.credenciais(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirUsuarios = (req, res) => {
    conDB.query(Usuarios.toDel(req.body), (err, result) => {
        if(err == null) {
            res.json(result).status(204).end();
        }else {
            res.status(400).end();
        }
    });
};

const editarUsuarios = (req, res) => {
    conDB.query(Usuarios.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const login = (req, res) => {
    jwt.sign(req.body, process.env.KEY, {expiresIn: '5m'}, (erro, token) => {

        if(erro == null) {
            conDB.query(Usuarios.toLogin(req.body), (err, result) => {
                if(err == null) {
                    result[0]["token"]= token
                    res.status(200).json(result[0]).end();
                }else{
               
                    res.status(404).json(err).end();
                }
            });

        }else {
            res.status(500).json(erro).end();
        }
    });

    
}


const remover = (req, res, next) => {
    const{id} = req.params;
    res.status(200).json({msg:"usuario deletado"}).end()
}

module.exports = {
    listarUsuarios,
    excluirUsuarios,
    cadastrarUsuarios,
    editarUsuarios,
    listarUsuario,
    Credenciais,
    login,
    remover
}