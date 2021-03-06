const express = require('express'),
  router = express.Router(),
  productController = require('../controllers/products')

// ROTAS DE PRODUTOS (GERAL E POR ID)
router.get('/:id', productController.show)
router.get('/', productController.index)

module.exports = router
