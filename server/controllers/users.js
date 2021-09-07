const usersPlaceholder = [
  {
    id: 0,
    nome: 'Adriana',
    sobrenome: 'Santos',
    avatar: '/images/adriana.png',
    plano: 'VIP'
  },
  {
    id: 1,
    nome: 'Bruna',
    sobrenome: 'Silva',
    avatar: '/images/bruna.png',
    plano: 'Free'
  },
  {
    id: 2,
    nome: 'Carlos',
    sobrenome: 'Roberto',
    avatar: '/images/carlos.png',
    plano: 'Pro'
  },
  {
    id: 3,
    nome: 'Douglas',
    sobrenome: 'Engraçado',
    avatar: '/images/douglas.png',
    plano: 'VIP'
  },
  {
    id: 4,
    nome: 'Erik',
    sobrenome: 'Gouveia',
    avatar: '/images/erik.png',
    plano: 'VIP'
  },
  {
    id: 5,
    nome: 'Flávia',
    sobrenome: 'Oliveira',
    avatar: '/images/flavia.png',
    plano: 'Free'
  },
  {
    id: 6,
    nome: 'Gilson',
    sobrenome: 'Soares',
    avatar: '/images/gilson.png',
    plano: 'Pro'
  },
  {
    id: 7,
    nome: 'Helena',
    sobrenome: 'Rios',
    avatar: '/images/helena.png',
    plano: 'Pro'
  },
  {
    id: 8,
    nome: 'Igor',
    sobrenome: 'Godoi',
    avatar: '/images/igor.png',
    plano: 'Free'
  },
  {
    id: 9,
    nome: 'Joana',
    sobrenome: 'Sousa',
    avatar: '/images/joana.png',
    plano: 'VIP'
  },
  {
    id: 10,
    nome: 'Kenny',
    sobrenome: 'Diniz',
    avatar: '/images/kenny.png',
    plano: 'Pro'
  },
  {
    id: 11,
    nome: 'Luiz',
    sobrenome: 'da Cunha',
    avatar: '/images/luiz.png',
    plano: 'Free'
  }
]

const controller = {
  index: (req, res, next) => {
    res.render('users', {
      titulo: 'Usuários',
      subtitulo: 'Listagem de Usuários',
      usuarios: usersPlaceholder
    });
  },
  show: (req, res, next) => {
    const { id } = req.params
    res.render('users', {
      titulo: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuarios: [usersPlaceholder[id]]
    });
  }
}

module.exports = controller
