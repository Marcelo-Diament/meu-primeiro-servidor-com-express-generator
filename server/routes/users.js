const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/users'),
  adminMiddleware = require('../middlewares/admin')

router.get('/', userController.index)
router.get('/listagem', adminMiddleware, userController.list)
router.get('/:id', userController.show)

module.exports = router
