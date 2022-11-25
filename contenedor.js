const fs = require('fs');
const moment = require('moment');
const { CLIENT_RENEG_LIMIT } = require('tls');

class Contenedor {
  constructor(nombreDelArchivo) {
    this.nombreDelArchivo = nombreDelArchivo;
  }

  async save(nuevoProducto) {
    try {
      const todosMisProductosString = await fs.promises.readFile(this.nombreDelArchivo, 'utf-8') // retorna un string
 
      const todosMisProductos = todosMisProductosString.length >= 1 ? JSON.parse(todosMisProductosString) : []
      const ultimoIndice = todosMisProductos.length - 1

      const ultimoId = todosMisProductos[ultimoIndice]?.id || 0
      const nuevoId = ultimoId + 1
      
      const todosMisProductosAgregandoElNuevo = [...todosMisProductos, {...nuevoProducto, id: nuevoId}]
  
      await fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(todosMisProductosAgregandoElNuevo))

      return nuevoId
    } catch(error) {
      if(error.message.includes('no such file')) return console.log('No existe el archivo "productos.txt"')
      console.log('Error: ', error.message)
    }


    
  }

  async getById(productoId) {
    const todosMisProductosString = await fs.promises.readFile(this.nombreDelArchivo, 'utf-8') // retorna un string

    const todosMisProductos = todosMisProductosString.length >= 1 ? JSON.parse(todosMisProductosString) : []
    let productoEncontrado = undefined

    for (const producto of todosMisProductos) {
      if (productoId == producto.id) {
        productoEncontrado = producto;
      }
    }

    return productoEncontrado
  }
   

  async getAll() {
    const todosMisProductosString = await fs.promises.readFile(this.nombreDelArchivo, 'utf-8') // retorna un string

    const todosMisProductos = todosMisProductosString.length >= 1 ? JSON.parse(todosMisProductosString) : []
    return todosMisProductos;
  }

  async deleteById(productoId) {
    const todosMisProductosString = await fs.promises.readFile(this.nombreDelArchivo, 'utf-8') // retorna un string

    const todosMisProductos = todosMisProductosString.length >= 1 ? JSON.parse(todosMisProductosString) : []
    for (const producto of todosMisProductos) {
      if (productoId == todosMisProductos.id) {
        await fs.promises.writeFile(this.nombreDelArchivo, "[]");
      } else {
        console.log("no se encuentra ese producto en stock");
      }
    } 
  } 
    

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.nombreDelArchivo, "[]");
      console.log("se eliminaron todo los datos lince");
    } catch (error) {
      console.log('Error: ', error.message)
    }

  }
} 

module.exports = Contenedor