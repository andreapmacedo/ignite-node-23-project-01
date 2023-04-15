import fs from 'node:fs/promises';

// console.log(import.meta.url); // caminho do diretório do arquivo
// const databasePath = new URL('db.json', import.meta.url); // diretorio do arquivo	
const databasePath = new URL('../db.json', import.meta.url); // diretório um nível acima
// console.log(databasePath); // caminho do arquivo

export class  Database {

  #database = {} // # é para privado

  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch((err) => {
        this.#persist();
      });
  }


  #persist(){
    // fs.writeFile('db.json', JSON.stringify(this.#database));
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table) {
    const data = this.#database[table] ?? [];
    return data;
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }
}