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

const server = http.createServer(async (req, res) => {
  const buffers = [];

  // Usado quando é necessário ler todos os dados da stream de leitura antes de processá-los.
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);

});

server.listen(3334);
