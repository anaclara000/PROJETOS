const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let manutencao = await prisma.manutencao.create({
        data: req.body
    });

    res.status(200).json(manutencao).end();
}

const readOne = async (req, res) => {
    let manutencao = await prisma.manutencao.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            data_inicio: true,
            data_fim: true,
            descricao: true,
            valor: true,
            idVeiculo: true
        }
    });

    //SELECT * FROM manutencao INNER JOIN publicacao ON manutencao.id = publicacao.manutencao_id WHERE ....

    res.status(200).json(manutencao).end();
}

const read = async (req, res) => {
    let manutencaos = await prisma.manutencao.findMany({
    });

    //SELECT email, nome FROM manutencao WHERE email = ''

    res.status(200).json(manutencaos).end();
}

const update = async (req, res) => {
    const manutencao = await prisma.manutencao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(manutencao).end();
}

const remove = async (req, res) => {
    const manutencao = await prisma.manutencao.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(manutencao).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
    
}