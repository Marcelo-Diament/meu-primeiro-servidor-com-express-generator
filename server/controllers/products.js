const controller = {
  index: (req, res, next) => {
    res.render('products', {
      titulo: 'PRODUTOS',
      subtitulo: 'PRODUTOS DO JEFFERSON'
    });
  },
  show: (req, res, next) => {
    const { nomeProduto } = req.params
    res.render('product', {
      titulo: 'PRODUTO',
      subtitulo: nomeProduto.toUpperCase(),
      preco: 690,
      cor: 'Azul'
    });
  }
}

module.exports = controller
