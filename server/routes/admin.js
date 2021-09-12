const express = require('express'),
  router = express.Router(),
  usersController = require('../controllers/users'),
  productsController = require('../controllers/products'),
  adminMiddleware = require('../middlewares/admin')

router.get('/produtos', adminMiddleware, productsController.list)
router.get('/usuarios', adminMiddleware, usersController.list)

module.exports = router
