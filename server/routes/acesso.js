const express = require('express'),
  router = express.Router(),
  acessoController = require('../controllers/acesso'),
  acessoMiddleware = require('../middlewares/auth')

  router.get('/cadastro', acessoController.register)
  router.get('/login', acessoController.login)
  router.post('/login', acessoMiddleware, acessoController.auth)
  router.get('/logout', acessoController.logout)
  router.get('/recuperar-senha', acessoController.lostPass)

module.exports = router
