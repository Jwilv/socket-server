const express = require('express')
//Servidor de express
const app = express();
//Servidor de sockets
const server = require('http').createServer(app);
//Directorio
app.use( express.static(__dirname + '/public'))

const io = require('socket.io')(server);

io.on('connection', () => { 
    console.log('cliente conectado');
});

server.listen(5050, ()=>{
    console.log(`server corriendo en el port:${5050}`);
});