const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')
const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  login: (req, res, next) => {
    res.render('login', {
      titulo: 'Login',
      subtitulo: 'Preencha os dados e acesse seu perfil!'
    });
  },
  register: (req, res, next) => {
    res.render('register', {
      titulo: 'Cadastro',
      subtitulo: 'Preencha os dados e complete seu cadastro!'
    });
  },
  lostPass: (req, res, next) => {
    res.render('lostPassword', {
      titulo: 'Recuperação de Senha',
      subtitulo: 'Preencha os dados e recupere sua senha!'
    });
  }
}

module.exports = controller
