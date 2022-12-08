const jwt = require('jsonwebtoken');
require ('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;
    
    jwt.verify(token, process.env.KEY, (err,data) => {
        if(err != null) res.status(404).json(err).end()
        else{
            if(data.status_user == "admin"){
                next();
            }else{
                res.status(401).json("Você não tem permissão para deletar um usuario").end();
            }
        }
        console.log(data)
    })
   
 
    res.status(200).end();
}

module.exports = {
    validaAcesso
}