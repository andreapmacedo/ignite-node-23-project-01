

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

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {
    // return response.end('Listagem de usuários');
    // return response.end(users); // retorna um erro, pois não é possível retornar um array de objetos.
    // return response.end(JSON.stringify(users)); // retorna um array de objetos em formato JSON.
    // o return abaixo adiciona um cabeçalho na resposta, informando que o conteúdo é um JSON. (ele vai formatar a saída)
    return response
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users)); //
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Jack parse',
      email: 'Jack@gmail.com',
    })

    return response.end('Criando um usuário');
  }

  response.end('Hello World');
});

server.listen(3333);


