const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'Listagem de Usuários',
      usuarios: usuariosPlaceholder,
      usuarioLogado: req.cookies.usuario
    });
  },
  show: (req, res, next) => {
    const { id } = req.params
    const usuario = usuariosPlaceholder[id]
    res.render('user', {
      titulo: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuario,
      usuarioLogado: req.cookies.usuario
    });
  }
}

module.exports = controller
