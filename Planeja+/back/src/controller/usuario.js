const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken")



const prisma = new PrismaClient()

const createItems = async (req, res) => {
  let usuario = await prisma.usuario.createMany({
    data: [
      {
        nome: "Jessica",
        email: "jessica@gmail.com",
        senha: "je",
        raz: "COCA COLA",
        nomeFantasia: "COCA",
        cnpj: "45997418000153",
        cpf: null,
        tipo: "Produtor",
        telefone: "(19) 992905-6789",
      },

    ],
    skipDuplicates: true, // Skip 'Bobo'

  });
  res.status(200).json(usuario).end();

}

// const create = async (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err == null) {

//       console.log("asadadadada" + req.body.senha);

//       bcrypt.hash(req.body.senha, salt, async function (errCrypto, hash) {
//         if (errCrypto == null) {
//           req.body.senha = hash

//           const usuario = await prisma.usuario.create({
//             data: req.body
//           })

//           res.status(200).json(usuario).end()
//         } else {
//           res.status(500).json(errCrypto).end()

//           console.log(res.status(500).json(errCrypto).end());
//         }
//       });
//     } else {
//       res.status(500).json(err).end()
//     }
//   })
// }


const login = async (req, res) => {
  const usuario = await prisma.usuario.findFirstOrThrow({
    where: {
      email: req.body.email
    }
  }).then((value) => { return (value) })
    .catch((err) => { return { "erro": "Usuário não encontrado", "validation": false } })

  if (usuario.erro == null) {
    bcrypt.compare(req.body.senha, usuario.senha).then((value) => {
      if (value) {
        let data = { "uid": usuario.id, "role": usuario.tipo }
        jwt.sign(data, process.env.KEY, { expiresIn: '1m' }, function (err2, token) {
          console.log(err2)
          if (err2 == null) {
            res.status(200).json({ "token": token, "uid": usuario.id, "uname": usuario.nome, "validation": true }).end()
          } else {
            res.status(500).json(err2).end()
          }

        })
      } else {
        res.status(201).json({ "erro": "Senha inválida", "validation": false }).end()
      }
    })
  } else {
    res.status(404).json(usuario).end()
  }


}

const read = async (req, res) => {
  let usuarios = await prisma.usuario.findMany();

  res.status(200).json(usuarios).end();
}

const readOne = async (req, res) => {
  let usuario = await prisma.usuario.findUnique({
    where: {
      id_usuario: Number(req.params.id_usuario)
    },
    select: {
      nome: true,
      email: true,
      senha: true,
      raz: true,
      nomeFantasia: true,
      cnpj: true,
      cpf: true,
      tiposEventos: {
        select:
        {
          nome: true,
        }
      },
      servicosPrestados: {
        select:
        {
          nome: true,
        }
      },
      tipo: true,
      telefone: true,
      eventos: {
        select:
        {
          id_eventos: true,
        }
      },
    }
  });

  res.status(200).json(usuario).end();
}

const update = async (req, res) => {
  const usuario = await prisma.usuario.update({
    where: {
      id_usuario: Number(req.params.id_usuario)
    },
    data: req.body
  })

  res.status(200).json(usuario).end();
}

const remove = async (req, res) => {
  const usuario = await prisma.usuario.delete({
    where: {
      id_usuario: Number(req.params.id_usuario)
    }
  })

  res.status(200).json(usuario).end();
}

const verificarCNPJ = async (req, res) => {

  const axios = require('axios');

  // const cnpj = '45997418000153';
  const url = `https://www.receitaws.com.br/v1/cnpj/${req.body.cnpj}`;

  console.log(url);

  axios.get(url)
    .then(response => {
      res.status(200).json(response.data).end();
    })
    .catch(error => {
      console.error(error);
    });
}


const create = async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        raz: req.body.raz,
        nomeFantasia: req.body.nomeFantasia,
        cnpj: req.body.cnpj,
        cpf: req.body.cpf,
        tipo: req.body.tipo,
        telefone: req.body.telefone,
      },


    });
    const path = require('path');
    const userId = usuario.id_usuario;
    const uploadPath = path.join(__dirname, 'uploads', userId.toString());
    console.log(userId)
    console.log(uploadPath)
    if (!fs.existsSync(uploadPath)) {
      try {
        fs.mkdirSync(uploadPath);
        console.log("aaaa")
      } catch (erro) {
        console.error(erro);
        res.status(500).json({ error: 'Erro aq' });
        return;
      }

    }
    res.status(200).json(usuario).end();
  } catch (err) {
    // console.error('Erro ao criar pasta de upload:', err);
    res.status(500).json({ error: 'Erro ao criar pasta de upload' });
    return;
  }
};




module.exports = {
  create,
  read,
  login,
  verificarCNPJ,
  readOne,
  update,
  remove,
  createItems,

}