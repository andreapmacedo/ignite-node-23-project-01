

// CommonJS => require
// const http = require('http');

// ES6 => import
// import http from 'http';
// para diferencia um modulo interno do node, utilizamos o modelo abaixo.
import http from 'node:http';


// GET => Buscar informações
// POST => Criar informações
// PUT => Alterar informações
// DELETE => Deletar informações
// PATCH => Alterar uma informação específica

// STATELESS => Não guarda informações do usuário
// STATEFUL => Guarda informações do usuário (memória)

// HEDERS => Informações sobre a requisição (metadados)

// JSON => JavaScript Object Notation

const users = [];


// No Node, toda porta é um servidor de streaming.
// Toda requisição request/response é um stream e pode enviar e receber informações aos poucos.

const server = http.createServer(async(req, res) => {
  const { method, url } = req;

  const buffers = [];

  // Usado quando é necessário ler todos os dados da stream de leitura antes de processá-los.
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  // const body = Buffer.concat(buffers).toString();
  // console.log(body); // body é uma string
  // console.log(body.name); // Não funciona pois é uma string e não um JSON.
  
  // const body = JSON.parse(Buffer.concat(buffers).toString());
  // console.log(body); // body é uma JSON
  // console.log(body.name); // como é um JSON, podemos acessar as propriedades dele.

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null; // caso o corpo da requisição não seja um JSON ou esteja vazio, o body será null.
  }
  
  
  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users)); //
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    })

    return res
    .writeHead(201)
    .end('Criando um usuário');
  }

  res.writeHead(404).end('Not found');
});

server.listen(3333);


