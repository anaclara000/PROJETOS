const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let evento = await prisma.eventos.create({
        data: req.body
    });

    res.status(200).json(evento).end();
}

const createItems = async (req, res) => {
    let evento = await prisma.eventos.createMany({
        data: [
            {
                idProdutor: 1
            },
        ],
        skipDuplicates: true, // Skip 'Bobo'

    });
    res.status(200).json(evento).end();

}

const read = async (req, res) => {
    let eventos = await prisma.eventos.findMany();

    res.status(200).json(eventos).end();
}


const readOne = async (req, res) => {
    let evento = await prisma.eventos.findUnique({
        where: {
            id_eventos: Number(req.params.id_eventos)
        },
        select: {
            id_eventos: true,
            idProdutor: true,
            produtor: true,
            lista: {
                select:
                {
                    nome: true,
                }
            },
            locacao: true,
            fornecedor: true,
        }
    });

    res.status(200).json(evento).end();
}

const update = async (req, res) => {
    const evento = await prisma.eventos.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(evento).end();
}

const remove = async (req, res) => {
    const evento = await prisma.eventos.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(evento).end();
}

module.exports = {
    read,
    readOne,
    update,
    remove,
    createItems,
    create

}