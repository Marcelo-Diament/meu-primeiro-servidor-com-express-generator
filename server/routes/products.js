const express = require('express'),
  router = express.Router(),
  productController = require('../controllers/products'),
  adminMiddleware = require('../middlewares/admin')

  router.get('/', productController.index)
  router.get('/listagem', adminMiddleware, productController.list)
  router.get('/:id', productController.show)

module.exports = router
