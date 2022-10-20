const Express = require('express');

const router = Express.Router();

const LancamentoController = require("./controllers/lancamentoController");

router.get("/cafezinho", LancamentoController.listarLancamentos);
router.post("/cafezinho", LancamentoController.cadastrarLancamento);

module.exports = router;