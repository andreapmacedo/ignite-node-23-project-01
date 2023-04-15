import http from 'node:http';
import { json } from './middlewares/json.js';

import { routes } from './routes.js';
// import { extractQueryParams } from './utils/extract-query-params.js';

// Query Paramaters -> URL Stateful
// parametro nomeado -> query paramater
// São usados para filtros, paginação... (dados não sensíveis)
// http://localhost:3333/users?userID=1 (Query Paramater -> chave: userID e valor: 1)
// http://localhost:3333/users?userID=1&name=Diego


// Route Paramenters
// parametros não nomeados -> route paramenter
// São usados para identificar recursos (dados não sensíveis)
// GET http://localhost:3333/users/1 (Route Paramenter -> chave: userID e valor: 1)
// DELETE http://localhost:3333/users/1
// É feito uma combinação de método, recurso e route paramenter para identificar uma rota
// metodo: GET, recurso: users, route paramenter: 1 

// Request Body
// envio de informações de formulário


const server = http.createServer(async(req, res) => {
  const { method, url } = req;

  await json(req, res);
  
  const route = routes.find((routeObj) => { 
    return routeObj.method === method && route.path === url;
});

  if (route) {
    return route.handler(req, res);
  }

  res.writeHead(404).end('Not found');
});

server.listen(3333);


