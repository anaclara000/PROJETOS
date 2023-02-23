const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let operacao = await prisma.operacao.create({
        data: req.body
    });

    res.status(200).json(operacao).end();
}

const readOne = async (req, res) => {
    let operacao = await prisma.operacao.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            dataInicio: true,
            dataFim: true,
            id_Motorista: true,
            idVeiculo: true,
            descricao: true
        }
    });

    //SELECT * FROM operacao INNER JOIN publicacao ON operacao.id = publicacao.operacao_id WHERE ....

    res.status(200).json(operacao).end();
}

const read = async (req, res) => {
    let operacaos = await prisma.operacao.findMany({
    });

    //SELECT email, nome FROM operacao WHERE email = ''

    res.status(200).json(operacaos).end();
}

const update = async (req, res) => {
    const operacao = await prisma.operacao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(operacao).end();
}

const remove = async (req, res) => {
    const operacao = await prisma.operacao.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(operacao).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
    
}