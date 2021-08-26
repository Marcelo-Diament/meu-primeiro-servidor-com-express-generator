const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'do site do Jefferson'
    });
  }
}

module.exports = controller
