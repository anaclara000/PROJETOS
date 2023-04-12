const express = require('express');

const router = express.Router();


const Usuario = require('../controller/usuario')

router.get('/usuarios', Usuario.read)
router.get('/usuarios/id/:id_usuario', Usuario.readOne)
router.post('/usuarios', Usuario.create)
router.post('/usuarios/criar', Usuario.createItems)
router.post('/usuarios/login', Usuario.login)
router.post('/usuarios/verificarCNPJ', Usuario.verificarCNPJ)


const TipoEvento = require('../controller/tiposEvento')

router.get('/tipos', TipoEvento.read)
router.post('/tipos/criar', TipoEvento.createItems)
router.post('/tipos', TipoEvento.create)

const Servicos = require('../controller/servicos')

router.get('/servicos', Servicos.read)
router.post('/servicos/criar', Servicos.createItems)
router.post('/servicos', Servicos.create)

const Eventos = require('../controller/eventos')

router.get('/eventos', Eventos.read)
router.get('/eventos/id/:id_eventos', Eventos.readOne)
router.post('/eventos/criar', Eventos.createItems)

const listaConvidados = require('../controller/listaConvidados')

router.get('/convidados', listaConvidados.read)
router.post('/convidados/criar', listaConvidados.createItems)

const Locacoes = require('../controller/locacoes')

router.get('/locacoes', Locacoes.read)
router.post('/locacoes/criar', Locacoes.createItems)

const Fornecedor = require('../controller/fornecedor')

router.get('/fornecedor', Fornecedor.read)
router.post('/fornecedor/criar', Fornecedor.createItems)

module.exports = router;