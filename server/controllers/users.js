const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'Listagem de Usuários',
      usuarios: usuariosPlaceholder,
      usuarioLogado: req.cookies.usuario,
      bannerTopo: '/images/banner-usuarios-1920x480.png'
    });
  },
  show: (req, res, next) => {
    const { id } = req.params
    const usuario = usuariosPlaceholder[id]
    res.render('user', {
      titulo: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuario,
      usuarioLogado: req.cookies.usuario,
      bannerTopo: '/images/banner-usuarios-1920x480.png'
    });
  }
}

module.exports = controller
