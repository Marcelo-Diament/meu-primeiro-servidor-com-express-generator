const usersPlaceholder = [
  {
    id: 0,
    nome: 'Fulano',
    sobrenome: 'de Tal',
    avatar: '/images/fulano.png'
  },
  {
    id: 1,
    nome: 'Beltrano',
    sobrenome: 'de Tal',
    avatar: '/images/beltrano.png'
  },
  {
    id: 2,
    nome: 'Ciclana',
    sobrenome: 'de Tal',
    avatar: '/images/ciclana.png'
  },
  {
    id: 3,
    nome: 'Abirosvaldo',
    sobrenome: 'de Tal',
    avatar: '/images/abirosvaldo.png'
  }
]

const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'do site do Jefferson',
      usuarios: usersPlaceholder
    });
  },
  show: (req, res, next) => {
    const { id } = req.params
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'do site do Jefferson',
      usuarios: [usersPlaceholder[id]]
    });
  }
}

module.exports = controller
