# Express com EJS

Projeto para aprendermos a trabalhar com o Express Generator e com EJS.

## Configuração Inicial

```sh
# Instalando o express generator de forma global
npm install express-generator -g
# Criando um projeto chamado server e indicando que usaremos a template view EJS
express server --view=ejs
# Acessando a pasta criada pelo express generator
cd server
# Instalando as dependências
npm install
# Instalação do nodemon como uma dependência de desenvolvimento
npm i nodemon --save-dev
```

Usando o Nodemon para escutar mudanças nos arquivos JS e atualizar o servidor automaticamente:

```json
{ "start": "nodemon ./bin/www" }
```

Levantando o servidor - na pasta `server` executar o comando via terminal `npm start` .

## MVC + Rota

Para entendermos o esquema MVC + Rotas, vamos percorrer uma rota de usuários.

Tudo começa no arquivo `server/app.js` . Ele importa o arquivo responsável pelas rotas de usuários e o utiliza quando o usuário final acessar uma rota que comece com `/users` , conforme trecho de código (code snippet) a seguir:

```js
app.use('/users', usersRouter);
```

Vamos ver o arquivo de rotas de usuários - `server/routes/users.js` :

```js
const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/users')

router.get('/', userController.index)

module.exports = router
```

Pelo arquivo, podemos reparar que estamos importando o arquivo `server/controllers/users.js` - arquivo responsável pelos controladores de rotas (de usuários, no caso).

Podemos ainda perceber que para a rota do tipo GET na raíz ( `/` ), estamos acessando o método `index` desse controller.

Vamos ver o que faz esse controller e seu método index... Arquivo `server/controllers/users.js` :

```js
const controller = {
    index: (req, res, next) => {
        res.render('users', {
            titulo: 'Usuários',
            subtitulo: 'do site do Jefferson'
        });
    }
}

module.exports = controller
```

Como podemos observar, esse controller não passa de um objeto. Esse objeto possui uma chave chamada `index` que, por sua vez, tem uma função atribuida a ela. Por isso a chamamos de **método** - e não, propriedade.

Ou seja, quando o usuário acessa `/users` , o `app` chama o arquivo de rotas de usuários. Esse, por sua vez, a partir da rota acessada, chama o método do controller que definimos. No caso, método index do controller de usuários.

A resposta desse método será a renderização de uma _view_ chamada `users` passando 2 propriedades para a _view_, no caso, _title_ e _subtitle_:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= titulo %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= titulo %></h1>
    <p><%= subtitulo %></p>
  </body>
</html>
```

Então finalmente temos nossa view `users` , consumindo o título e o subtítulo enviados como segundo argumento do método `render` (que recebe o nome da _view_ e o objeto que terá suas propriedades compartilhadas com a _view_).
