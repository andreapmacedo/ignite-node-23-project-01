

import { Readable } from 'node:stream';


class OneToHundredStream extends Readable {
  
  index = 0;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(i.toString()); 
        this.push(buf);
      }
    }, 1000);
  }
}

/*
  - A função fetch está disponível a partir da versão 18 do node.
  - Para simular que estamos enviando informações aos poucos só pode ser enviada com os métodos POST e PUT. ( metodo GET não tem corpo )
  */

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(), // Passa a stream como corpo da requisição.
  duplex: 'half' // Esta linha é necessária para a versão 19 do node.
})