const express = require('express');
const { Socket } = require('socket.io');
//Servidor de express
const app = express();
//Servidor de sockets
const server = require('http').createServer(app);
//Directorio
app.use( express.static(__dirname + '/public'))

const io = require('socket.io')(server);

io.on('connection', ( socket ) => { 

    socket.emit('ms-bienvenida',{
        msg:'bienvenidos al himalaya',
        fecha: new Date(),
    });

    socket.on('msg-cliente', ( data ) => { 
        console.log(data)
    });

});



server.listen(5050, ()=>{
    console.log(`server corriendo en el port:${5050}`);
});