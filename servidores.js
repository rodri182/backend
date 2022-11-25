
///response.end(envia un mensaje al servidor!!!!)
///.listen indica el puerto
const moment = require("moment");
const http = require("http");
const port = 3001;
const server = http.createServer((request, response)=> {
    const hora = moment().add(1, "h").hour();
    let mensaje = "Buenas noches";
    if(hora >= 6 && hora <=12) mensaje = "Buenos Dias";
    if(hora >= 12 && hora <=19) mensaje = "Buenas Tardes";
    response.end(` ${mensaje}`);

});/// aca ya existe el servidor
/// aca se levanta el servidor 
const conenctedServer = server.listen(port,()=>{console.log(`server on http://localhost:${port}`);});// se imprime para que se habra

conenctedServer.on("error", error => console.log(error));
