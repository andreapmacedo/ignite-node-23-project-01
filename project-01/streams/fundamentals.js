

// Importação de clientes via CSV(excel)

// 1gb -  1.000.000

// POST /upload import.csv

// 10mb/s - 100s

// 100s -> inserção de registros no banco de dados

// 10mb/s -> 10.000 registros

// Readable Streams / Writable Streams


// process.stdin
//   .pipe(process.stdout); // O pipe é um método que permite que um stream seja passado para outro stream. Nesse caso, o que está sendo passado é o que está sendo digitado no terminal para o que está sendo exibido no terminal.


// construindo uma stream do zero  

import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  
  index = 0;
  _read() {
    const i = this.index++;
    if (i > 100) {
      this.push(null); // quer dizer que não tem mais nada para ser lido.
    } else {
      // this.push(i); // Isso vai dar erro pois o push espera receber um buffer. (nunca vai poder ir um primitive type)

      const buf = Buffer.from(i.toString()); // const buf = Buffer.from(String(i));
      this.push(buf);


      // *sugerido pelo copilot
      // const str = '' + i;
      // const buf = Buffer.from(str, 'ascii');
      // this.push(buf);
    }
  }
  
  // *sugerido pelo copilot
  // constructor() {
  //   super();
  //   this.current = 0;
  // }

  // _read() {
  //   this.current += 1;
  //   this.push(this.current.toString());

  //   if (this.current === 100) {
  //     this.push(null);
  //   }
  // }
}

// Enquanto ele vai lendo, já vai escrevendo no terminal.
// new OneToHundredStream()
//   .pipe(process.stdout);


  class OneToHundredStream_ex02 extends Readable {
  
    index = 0;
    _read() {
      const i = this.index++;
      setTimeout(() => {
        if (i > 100) {
          this.push(null); // quer dizer que não tem mais nada para ser lido.
        } else {
          const buf = Buffer.from(i.toString()); // const buf = Buffer.from(String(i));
          this.push(buf);
        }
      }, 1000);
    }
  }
  
  new OneToHundredStream_ex02()
  .pipe(process.stdout);