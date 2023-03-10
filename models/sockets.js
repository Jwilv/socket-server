

class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            //escuchar evento del server
            socket.on('msg-to-server', (data) => {
                console.log(data)
                this.io.emit('msg-from-server', data)
            });

        });
    }
}

module.exports = Sockets