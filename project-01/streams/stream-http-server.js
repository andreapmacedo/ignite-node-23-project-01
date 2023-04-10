import http from 'node:http';	
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    console.log(transformed);
    callback(null, transformed.toString());
  }
}  

// request é um stream de leitura
// response é um stream de escrita

const server = http.createServer((req, res) => {
  return req
    .pipe(new InverseNumberStream())
    .pipe(res);
});

server.listen(3334);
