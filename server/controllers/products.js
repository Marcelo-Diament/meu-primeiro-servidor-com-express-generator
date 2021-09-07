const produtosPlaceholder = [
  {
    id: 0,
    nome: 'Caixa de Som',
    preco: 500,
    precoPromo: 499,
    descricao: 'Caixa de Som 20 WATTS',
    imagem: '/images/caixa-de-som.png',
    marca: 'JBL',
    sku: 'jbl-cxsom-00',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 1,
    nome: 'Câmera Digital',
    preco: 350,
    precoPromo: 349,
    descricao: 'Câmera Digital 12 MP com Zoom até 4x. Visão noturna e gravação de vídeos de até 1 minuto (Full HD). Compartilhe suas fotos online instantaneamente. Saiba mais.',
    imagem: '/images/camera.png',
    marca: 'Sony',
    sku: 'son-camdig-01',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 2,
    nome: 'Controle Game',
    preco: 600,
    precoPromo: null,
    descricao: 'Controle top!',
    imagem: '/images/controle-game.png',
    marca: 'PlayStation',
    sku: 'ps-ctrgm-02',
    categoria: 'Games'
  },
  {
    id: 3,
    nome: 'Fone de Ouvido',
    preco: 800,
    precoPromo: 600,
    descricao: 'Pra ouvir aquela sonzeira...',
    imagem: '/images/fone-de-ouvido.png',
    marca: 'B&O',
    sku: 'bng-fnov-03',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 4,
    nome: 'Video Game',
    preco: 700,
    precoPromo: null,
    descricao: 'Game du bom.',
    imagem: '/images/game.png',
    marca: 'PlayStation',
    sku: 'ps-game-04',
    categoria: 'Games'
  },
  {
    id: 5,
    nome: 'Game Boy',
    preco: 700,
    precoPromo: null,
    descricao: 'Game portátil.',
    imagem: '/images/gameboy.png',
    marca: 'Nintendo',
    sku: 'nin-gabo-05',
    categoria: 'Games'
  },
  {
    id: 6,
    nome: 'Microfone',
    preco: 750,
    precoPromo: null,
    descricao: 'Em alto e bom som!',
    imagem: '/images/microfone.png',
    marca: 'B&O',
    sku: 'bng-micf-06',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 7,
    nome: 'Notebook',
    preco: 1700,
    precoPromo: 1500,
    descricao: 'Notebook i7',
    imagem: '/images/notebook.png',
    marca: 'Acer',
    sku: 'ace-note-07',
    categoria: 'Informática'
  },
  {
    id: 8,
    nome: 'Óculos Webcam',
    preco: 1000,
    precoPromo: 990,
    descricao: 'Óculos com Webcam 20 MP',
    imagem: '/images/oculos-com-webcam.png',
    marca: 'Samsung',
    sku: 'ssg-oclweb-08',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 9,
    nome: 'Óculos VR',
    preco: 1000,
    precoPromo: 990,
    descricao: 'Óculos com Realidade Virtual',
    imagem: '/images/oculos-vr.png',
    marca: 'Samsung',
    sku: 'ssg-oclvrr-09',
    categoria: 'Áudio e Vídeo'
  },
  {
    id: 10,
    nome: 'Pendrive',
    preco: 17,
    precoPromo: 15,
    descricao: 'Pendrive 16 GB',
    imagem: '/images/pendrive.png',
    marca: 'Acer',
    sku: 'ace-pnd-10',
    categoria: 'Informática'
  },
  {
    id: 11,
    nome: 'Smartwatch',
    preco: 2000,
    precoPromo: null,
    descricao: 'Smartwatch Topzera',
    imagem: '/images/smartwatch.png',
    marca: 'Samsung',
    sku: 'ssm-smtwtc-11',
    categoria: 'Informática'
  }
]

const controller = {
  index: async (req, res, next) => {
    return res.render('products', {
      titulo: 'Produtos',
      subtitulo: 'Produtos incríveis para você',
      produtos: produtosPlaceholder,
      textoPromo: 'Ofertas imperdíveis'
    })
  },
  show: async (req, res, next) => {
    const { id } = await req.params
    const produto = produtosPlaceholder[id]
    res.render('users', {
      titulo: `${produto.nome}`,
      subtitulo: `${produto.descricao}`,
      produtos: [produto],
      textoPromo: 'Últimas unidades!'
    });
  }
}

module.exports = controller
