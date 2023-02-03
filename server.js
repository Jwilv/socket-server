const express = require('express');
//Servidor de sockets
const http = require('http');
//socket
const socketio = require('socket.io');
const path = require('path')

class Server {


    constructor(){
        this.app = express();
        this.port = 5050;

        //http server
        this.server = http.createServer(this.app);

        //configuraciones de sockets
        this.io = socketio(this.server, {/* configuraciones */});

    }

    goServer(){
        //desplegar server
        this.server.listen(this.port, ()=>{
            console.log(`server corriendo en el port:${this.port}`);
        });
    }

    middelwares(){
        //desplegar directorio publico
        this.app.use( express.static(path.resolve(__dirname + '../public')))
    }

    execute(){
        this.middelwares();
        this.goServer();
    }


}

module.exports = Server;