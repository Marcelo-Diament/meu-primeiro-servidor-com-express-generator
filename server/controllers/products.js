const produtos = [
  {
    id: 0,
    nome: 'Óculos de Sol',
    preco: 500,
    precoPromo: 499,
    descricao: 'Óculos muito bom! Bom mesmo...',
    imagem: '/images/oculos.png'
  },
  {
    id: 1,
    nome: 'Mochila',
    preco: 600,
    precoPromo: null,
    descricao: 'Mochila muito boa! Boa mesmo...',
    imagem: '/images/mochila.png'
  },
  {
    id: 2,
    nome: 'Abajour',
    preco: 800,
    precoPromo: 600,
    descricao: 'Abajour muito bom mesmo...',
    imagem: '/images/abajour.png'
  },
  {
    id: 3,
    nome: 'Relógio',
    preco: 700,
    precoPromo: null,
    descricao: 'Relógio da hora.',
    imagem: '/images/relogio.png'
  }
]

const controller = {
  index: (req, res, next) => {
    res.render('products', {
      titulo: 'Produtos',
      subtitulo: 'Veja todos os produtos',
      produtos,
      textoPromo: 'Ofertas imperdíveis'
    })
  }
}

module.exports = controller
