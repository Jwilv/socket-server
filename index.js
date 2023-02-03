const Server = require("./server");

const server = new Server

server.execute();



// io.on('connection', ( socket ) => { 

//     // socket.emit('ms-bienvenida',{
//     //     msg:'bienvenidos al himalaya',
//     //     fecha: new Date(),
//     // });

//     socket.on('msg-to-server', ( data ) => { 
//         console.log(data)
//         io.emit('msg-from-server', data)
//     });

// });



