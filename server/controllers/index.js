const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')
const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('index', {
      titulo: 'Jeff Co.',
      subtitulo: 'Confira nossos Produtos e Usuários',
      usuarios: usuariosPlaceholder,
      produtos: produtosPlaceholder,
      usuarioLogado: req.cookies.usuario
    });
  }
}

module.exports = controller
