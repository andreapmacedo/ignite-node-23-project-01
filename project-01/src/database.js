export class  Database {


  #database = {} // # é para privado

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
    return data;
  }

    // *sugerido pelo copilot
    // constructor() {
    //   this.data = [];
    // }
  
    // async create(data) {
    //   this.data.push(data);
    // }
  
    // async read() {
    //   return this.data;
    // }
  
    // async update(id, data) {
    //   const index = this.data.findIndex(item => item.id === id);
    //   this.data.splice(index, 1, data);
    // }
  
    // async delete(id) {
    //   const index = this.data.findIndex(item => item.id === id);
    //   this.data.splice(index, 1);
    // }
}