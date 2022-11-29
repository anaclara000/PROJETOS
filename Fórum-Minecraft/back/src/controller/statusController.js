const conDB = require('../dao/dbForum');
const Status = require('../models/status')

function listarStatus(req, res) {
    conDB.query(Status.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarStatus
}