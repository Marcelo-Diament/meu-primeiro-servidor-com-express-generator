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
    res.render('users', {
      titulo: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuarios: [usuariosPlaceholder[id]],
      usuarioLogado: req.cookies.usuario
    });
  }
}

module.exports = controller
