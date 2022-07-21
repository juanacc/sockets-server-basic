//HTML References
const lblOnline = document.querySelector('#lbl-online');
const lblOffline = document.querySelector('#lbl-offline');
const txtMessage = document.querySelector('#txt-message');
const btnSend = document.querySelector('#btn-send');

const socketClient = io();

socketClient.on('connect', () => {
    console.log('Socket connected');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socketClient.on('disconnect', () => {
    console.log('Socket disconnected');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socketClient.on('server-send-message', (payload) => {
    console.log('desde el servidor', payload)
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: 'sdskldsldsl',
        date: new Date().getTime()
    }
    socketClient.emit('client-send-message', payload, (id) => {
        console.log('Desde el server', id);
    });
})