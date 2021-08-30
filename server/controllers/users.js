const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'do site do Jefferson'
    });
  },
  show: (req, res, next) => {
    const {apelido} = req.params
    res.render('users', {
      titulo: `Usuário ${apelido}`,
      subtitulo: 'no site do Jefferson'
    });
  },
  chuparCanaEAssobiar: (req, res, next) => {
    res.render('users', {
      titulo: 'Chupando cana',
      subtitulo: '...e assobiando!'
    });
  }
}

module.exports = controller
