const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const admin = async (req, res, next) => {
  let isAdmin = req.cookies.admin

  if (!isAdmin) {
    res.render('login', {
      titulo: 'Ops!',
      subtitulo: 'Você não tem permissões para ver essa tela...'
    })
    return
  }
  next()
  return
}

module.exports = admin