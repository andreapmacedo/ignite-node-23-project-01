
import http from 'node:http';
import { json } from '../middlewares/json.js';
const  { routes } = './routes.js'

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


