exports.socketController = socket => {
    
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    })

    // socket.on('client-send-message', payload => {
    //     //Enviar mensaje a todos los clientes conectados
    //     this.io.emit('server-send-message', payload);
    // })

    socket.on('client-send-message', (payload, callback) => {
        
        const id =123456;
        callback({id, date: new Date().getTime()});//Envio mensaje solo al cliente emisor

        socket.broadcast.emit('server-send-message', payload);//Enviar mensaje a todos los clientes conectados pero no al emisor del mensaje
    })

  }