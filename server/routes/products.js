const express = require('express'),
  router = express.Router(),
  productController = require('../controllers/products')

  router.get('/', productController.index)

module.exports = router
