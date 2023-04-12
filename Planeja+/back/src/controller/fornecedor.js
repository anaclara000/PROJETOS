const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let fronecedores = await prisma.fornecedor.create({
        data: req.body
    });

    res.status(200).json(fronecedores).end();
}

const createItems = async (req, res) => {
    let fronecedores = await prisma.fornecedor.createMany({
        data: [
            {
                nome: "teste",
                descricao: "teste",
                tipo: "teste",
                telefone: "teste",
                valor: 2,
                idEvento: 1,
            },

        ],
        skipDuplicates: true, // Skip 'Bobo'

    });
    res.status(200).json(fronecedores).end();

}

const read = async (req, res) => {
    let fronecedoress = await prisma.fornecedor.findMany();

    res.status(200).json(fronecedoress).end();
}


const readOne = async (req, res) => {
    let fronecedores = await prisma.fornecedor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
        }
    });

    res.status(200).json(fronecedores).end();
}

const update = async (req, res) => {
    const fronecedores = await prisma.fornecedor.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(fronecedores).end();
}

const remove = async (req, res) => {
    const fronecedores = await prisma.fornecedor.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(fronecedores).end();
}

module.exports = {
    read,
    readOne,
    update,
    remove,
    createItems,
    create

}