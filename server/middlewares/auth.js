const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const auth = async (req, res, next) => {
  res.clearCookie('usuario')
  res.clearCookie('admin')
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
      subtitulo: 'Algo de errado não deu certo...',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
  let usuario = JSON.parse(JSON.stringify(usuarioLogado[0], ['id', 'nome', 'sobrenome', 'apelido', 'nascimento', 'corPreferida', 'avatar', 'email', 'telefone', 'plano', 'admin']))
  res.cookie('usuario', usuario)
  res.cookie('admin', `${usuarioLogado[0].admin}`)
  next()
}

module.exports = auth