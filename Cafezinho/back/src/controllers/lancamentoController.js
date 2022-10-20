const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "cafezinho"
});

function listarLancamentos(req, res){
    let query = "SELECT * FROM debito";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarLancamento(req, res) {
    let query = `INSERT INTO debito VALUES (DEFAULT, '${req.body.data_lan}', '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();

            
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarLancamentos,
    cadastrarLancamento
}