const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient();

const create = async (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        if (err == null) {
          bcrypt.hash(req.body.senha, salt, async function(errCrypto, hash) {
            if(errCrypto == null){
                req.body.senha = hash
              
                const usuario = await prisma.usuario.create({
                    data: req.body
                })

                res.status(200).json(usuario).end()
            } else {
              res.status(500).json(errCrypto).end()
            }
          });
        } else {
          res.status(500).json(err).end()
        }
      })
}


const readOne = async (req, res) => {
    let usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            email: true,
            senha: true,
            CPF: true,
            nivel: true
        }
    });

    //SELECT * FROM usuario INNER JOIN publicacao ON usuario.id = publicacao.usuario_id WHERE ....

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuarios = await prisma.usuario.findMany({
    });

    //SELECT email, nome FROM usuario WHERE email = ''

    res.status(200).json(usuarios).end();
}

const update = async (req, res) => {
    const usuario = await prisma.usuario.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(usuario).end();
}

const remove = async (req, res) => {
    const usuario = await prisma.usuario.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(usuario).end();
}

const login = async(req, res) => {
    const usuario = await prisma.usuario.findFirstOrThrow({
      where: {
        email: req.body.email
      }
    }).then((value) => {return(value)})
    .catch((err) => {return {"erro": "Usuário não encontrado", "validation": false}})

    if (usuario.erro == null) {
      bcrypt.compare(req.body.senha, usuario.senha).then((value) => {
        if (value) {
          let data = {"uid": usuario.id, "role": usuario.tipo}
          jwt.sign(data, process.env.KEY, {expiresIn: '1m'}, function(err2, token) {
            console.log("a")
            if(err2 == null){
  
                res.status(200).json({"token": token, "uid": usuario.id, "uname": usuario.nome, "validation": true}).end()
            } else {
                res.status(500).json(err2).end()
            }
            
          })  
        } else {
          res.status(201).json({"erro": "Senha inválida", "validation": false}).end()
        }
      })
    } else {
      res.status(404).json(usuario).end()
    }

    
}


module.exports = {
    create,
    read,
    readOne,
    update,
    remove,
    login
    
}