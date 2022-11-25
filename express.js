const express = require("express");
const port = 8080;
const app = express();
const Contenedor = require("./contenedor.js");



app.get("/productos", async (req, res, next)=>{
  const contenedor = new Contenedor("./productos.txt");
  const productos = await contenedor.getAll();
  res.json(productos);
})
app.get("/productosRandom", async(req, res, next)=>{
  const contenedor = new Contenedor("./productos.txt");
  const productos = await contenedor.getAll();
  const productoAleatorio = productos[Math.floor(Math.random() * productos.length)];
  res.json(productoAleatorio);
})

app.listen(port,()=>{console.log(`server on http://localhost:${port}`);});

