const express = require('express'),
  router = express.Router(),
  acessoController = require('../controllers/acesso')

  router.get('/cadastro', acessoController.register)
  router.get('/login', acessoController.login)
  router.get('/recuperar-senha', acessoController.lostPass)

module.exports = router
