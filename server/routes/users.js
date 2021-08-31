const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/users')

  router.get('/', userController.index)
  router.get('/:id', userController.show)

module.exports = router
