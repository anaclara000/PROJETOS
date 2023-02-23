const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let motorista = await prisma.motorista.create({
        data: req.body
    });

    res.status(200).json(motorista).end();
}

const readOne = async (req, res) => {
    let motorista = await prisma.motorista.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            CNH: true,
            disponivel: true,
            veiculos: true,
            operacao: true
        }
    });

    //SELECT * FROM motorista INNER JOIN publicacao ON motorista.id = publicacao.motorista_id WHERE ....

    res.status(200).json(motorista).end();
}

const read = async (req, res) => {
    let motoristas = await prisma.motorista.findMany({
    });

    //SELECT email, nome FROM motorista WHERE email = ''

    res.status(200).json(motoristas).end();
}

const update = async (req, res) => {
    const motorista = await prisma.motorista.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(motorista).end();
}

const remove = async (req, res) => {
    const motorista = await prisma.motorista.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(motorista).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
    
}