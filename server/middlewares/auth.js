const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const auth = async (req, res, next) => {
  res.clearCookie('usuario')
  const { email, senha } = await req.body
  const usuarioLogado = usuariosPlaceholder.filter(usuario => {
    if (usuario.email === email) {
      if (usuario.senha === senha) {
        return usuario
      }
    }
  })
  if (!usuarioLogado.length) {
    res.render('login', {
      titulo: 'Ops!',
      subtitulo: 'Algo de errado não deu certo...'
    })
  }
  let usuario = JSON.parse(JSON.stringify(usuarioLogado[0], ['id', 'nome', 'segundoNome', 'sobrenome', 'apelido', 'nascimento', 'corPreferida', 'avatar', 'email', 'telefone', 'plano']))
  res.cookie('usuario', usuario)
  // res.redirect('../')
  next()
}

module.exports = auth