const express = require('express'),
  router = express.Router(),
  productController = require('../controllers/products')

  router.get('/', productController.index)
  router.get('/:nomeProduto', productController.show)

module.exports = router
