//Servidor de express
const app = require('express')();
//Servidor de sockets
const server = require('http').createServer(app);
//
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });

server.listen(5050, ()=>{
    console.log(`server corriendo en el port:${5050}`);
});