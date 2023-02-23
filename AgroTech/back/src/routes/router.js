const express = require('express');

const router = express.Router();

const Usuario = require('../controller/Usuario');

router.post('/Login', Usuario.login);
router.post('/Usuario', Usuario.create);
router.get('/Usuario/idUm/:id', Usuario.readOne);
router.get('/Usuario', Usuario.read);
router.put('/Usuario/idUp/:id', Usuario.update);
router.delete('/Usuario/idDel/:id', Usuario.remove)

const Motorista = require('../controller/Motorista');

router.post('/Motorista', Motorista.create);
router.get('/Motorista/idUm/:id', Motorista.readOne);
router.get('/Motorista', Motorista.read);
router.put('/Motorista/idUp/:id', Motorista.update);
router.delete('/Motorista/idDel/:id', Motorista.remove)


const Veiculos = require('../controller/Veiculos');

router.post('/Veiculos', Veiculos.create);
router.get('/Veiculos/idUm/:id', Veiculos.readOne);
router.get('/Veiculos', Veiculos.read);
router.put('/Veiculos/idUp/:id', Veiculos.update);
router.delete('/Veiculos/idDel/:id', Veiculos.remove)

const manutencao = require('../controller/manutencao');

router.post('/manutencao', manutencao.create);
router.get('/manutencao/idUm/:id', manutencao.readOne);
router.get('/manutencao', manutencao.read);
router.put('/manutencao/idUp/:id', manutencao.update);
router.delete('/manutencao/idDel/:id', manutencao.remove)


const Operacao = require('../controller/Operacao');

router.post('/Operacao', Operacao.create);
router.get('/Operacao/idUm/:id', Operacao.readOne);
router.get('/Operacao', Operacao.read);
router.put('/Operacao/idUp/:id', Operacao.update);
router.delete('/Operacao/idDel/:id', Operacao.remove)

module.exports = router;