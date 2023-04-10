

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

import { Readable, Writable, Transform, Duplex } from 'node:stream';

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
  
  // new OneToHundredStream_ex02()
  // .pipe(process.stdout);



class MultiplyByTenStream extends Writable {
  /**
   * O chunk é o que está sendo passado para a stream. na classe acima, no método _read em 'this.push(buf)', o buf é o chunk.
   * O encoding é o tipo de encoding que está sendo utilizado. (utf-8, ascii, etc)
   * O callback é uma função que deve ser chamada quando o processamento do chunk for finalizado.
   */

  /**
   * Lembrando que dentro de uma stream de leitrura, nunca retornamos nada. (não temos um return)
   * Apenas processamos o dado
   */

  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();

    // *sugerido pelo copilot
    // const number = Number(chunk);
    // console.log(number * 10);
    // callback();
  }
}


/**
  * Lendo dados em uma stream de leitura e processando-os em um stream de escrita.
  */ 

// new OneToHundredStream_ex02()
//   .pipe(new MultiplyByTenStream());


class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, transformed.toString());
    

    // *sugerido pelo copilot
    // const number = Number(chunk);
    // const inverse = 1 / number;
    // this.push(inverse.toString());
    // callback();
  }
}  

/**
 * Lendo dados em uma stream de leitura, processando-os em um stream de transformação e depois em um stream de escrita.
 */
 
// new OneToHundredStream_ex02()
//   .pipe(new InverseNumberStream())

  new OneToHundredStream_ex02()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());


  /**
   * no caso do stream Dublex, ele é um stream que pode tanto ler quanto escrever, mas não pode transformar os dados.
   */