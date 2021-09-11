const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: async (req, res, next) => {
    return res.render('products', {
      titulo: 'Produtos',
      subtitulo: 'Produtos incríveis para você',
      produtos: produtosPlaceholder,
      textoPromo: 'Ofertas imperdíveis'
    })
  },
  show: async (req, res, next) => {
    const { id } = await req.params
    const produto = produtosPlaceholder[id]
    res.render('product', {
      titulo: `${produto.nome}`,
      subtitulo: `${produto.nome} | ${produto.categoria}`,
      produto,
      textoPromo: 'Últimas unidades!'
    });
  }
}

module.exports = controller
