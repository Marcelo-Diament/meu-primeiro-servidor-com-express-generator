const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'Listagem de Usuários',
      usuarios: usuariosPlaceholder,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      bannerTopo: '/images/banner-topo-usuarios-1564x472.png',
      bannerMeio: '/images/banner-meio-usuarios-1920x1080.png'
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
      usuarioAdmin: req.cookies.admin,
      bannerTopo: '/images/banner-topo-usuario-1564x472.png',
      bannerMeio: '/images/banner-meio-usuario-1920x1080.png'
    });
  },
  list: (req, res, next) => {
    let admin = req.cookies.admin
    if (!admin) {
      res.render('users', {
        titulo: 'Usuários',
        subtitulo: 'Listagem de Usuários',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin,
        bannerTopo: '/images/banner-topo-usuarios-1564x472.png',
        bannerMeio: '/images/banner-meio-usuarios-1920x1080.png'
      });
    } else {
      res.render('usersList', {
        titulo: 'Usuários',
        subtitulo: 'Listagem de Usuários',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin
      });
    }
  }
}

module.exports = controller
