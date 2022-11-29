const conDB = require('../dao/dbForum');
const Perguntas = require('../models/perguntas')

const listarPerguntas = (req, res) => {
    conDB.query(Perguntas.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const listarPerguntaUser = (req, res) => {
    conDB.query(Perguntas.toReadUser(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const listarIdPergunta = (req, res) => {
    conDB.query(Perguntas.toReadPerg(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const cadastrarPerguntas = (req, res) => {
    conDB.query(Perguntas.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirPerguntas = (req, res) => {
    conDB.query(Perguntas.toDel(req.body), (err, result) => {
        if(err == null) {
            res.json(result).status(204).end();
        }else {
            res.status(400).end();
        }
    });
};

const editarPerguntas = (req, res) => {
    conDB.query(Perguntas.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarPerguntas,
    excluirPerguntas,
    cadastrarPerguntas,
    editarPerguntas,
    listarPerguntaUser,
    listarIdPergunta
}