const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/users')

  router.get('/doideira', userController.chuparCanaEAssobiar)
  router.get('/:apelido', userController.show)
  router.get('/', userController.index)

module.exports = router
