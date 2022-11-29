const conDB = require('../dao/dbForum.js');
const Respostas = require('../models/respostas')

const listarRespostas = (req, res) => {
    conDB.query(Respostas.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const listarResposta = (req, res) => {
    conDB.query(Respostas.toRead(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const cadastrarRespostas = (req, res) => {
    conDB.query(Respostas.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirRespostas = (req, res) => {
    conDB.query(Respostas.toDel(req.body), (err, result) => {
        if(err == null) {
            res.json(result).status(204).end();
        }else {
            res.status(400).end();
        }
    });
};

const editarRespostas = (req, res) => {
    conDB.query(Respostas.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarRespostas,
    excluirRespostas,
    cadastrarRespostas,
    editarRespostas,
    listarResposta
}