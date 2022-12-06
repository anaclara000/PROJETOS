const Express = require('express');
const router = Express.Router();

const UsuariosController = require("./controller/usuariosController");
const PerguntasController = require("./controller/perguntasController");
const RespostasController = require("./controller/respostasController");
const FeedController = require("./controller/feedController");
const StatusController = require("./controller/statusController");
const Middleware = require('./middleware/middleware')
const Usuario = require('./controller/usuariosController')

router.get("/Usuarios", UsuariosController.listarUsuarios);
router.get("/Usuarios/:id_user", UsuariosController.listarUsuario);
router.post("/Usuarios", UsuariosController.cadastrarUsuarios);
router.post("/Usuarios/credenciais", UsuariosController.Credenciais);
router.delete("/Usuarios", UsuariosController.excluirUsuarios);
router.put("/Usuarios", UsuariosController.editarUsuarios);

router.get("/Perguntas", PerguntasController.listarPerguntas);
router.get("/Perguntas/user/:id_user", PerguntasController.listarPerguntaUser);
router.get("/Perguntas/quest/:id_pergunta", PerguntasController.listarIdPergunta);
router.post("/Perguntas", PerguntasController.cadastrarPerguntas);
router.delete("/Perguntas", PerguntasController.excluirPerguntas);
router.put("/Perguntas", PerguntasController.editarPerguntas);

router.get("/Respostas", RespostasController.listarRespostas);
router.post("/Respostas", RespostasController.cadastrarRespostas);
router.delete("/Respostas", RespostasController.excluirRespostas);
router.put("/Respostas", RespostasController.editarRespostas);

// VIEWS
router.get("/Feed", FeedController.listarFeed);
router.get("/Status", StatusController.listarStatus);

// JSON token
router.post('/login', Usuario.login)


router.delete('/delete/:id', Middleware.validaAcesso, Usuario.remover)

module.exports = router;