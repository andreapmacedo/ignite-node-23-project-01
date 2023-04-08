

// CommonJS => require
// const http = require('http');

// ES6 => import
// import http from 'http';
// para diferencia um modulo interno do node, utilizamos o modelo abaixo.
import http from 'node:http';

const server = http.createServer((request, response) => {
  response.end('Hello World');
});

server.listen(3333);


