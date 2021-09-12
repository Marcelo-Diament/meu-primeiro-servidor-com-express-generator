const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: async (req, res, next) => {
    return res.render('products', {
      titulo: 'Produtos',
      subtitulo: 'Produtos incríveis para você',
      produtos: produtosPlaceholder,
      textoPromo: 'Ofertas imperdíveis',
      usuarioLogado: req.cookies.usuario,
      bannerTopo: '/images/banner-produtos-1920x480.png'
    })
  },
  show: async (req, res, next) => {
    const { id } = await req.params
    const produto = produtosPlaceholder[id]
    res.render('product', {
      titulo: `${produto.nome}`,
      subtitulo: `${produto.nome} | ${produto.categoria}`,
      produto,
      textoPromo: 'Últimas unidades!',
      usuarioLogado: req.cookies.usuario,
      bannerTopo: '/images/banner-produtos-1920x480.png'
    });
  }
}

module.exports = controller
