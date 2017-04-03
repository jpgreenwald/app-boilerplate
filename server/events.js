'use strict';
const io = require('./web_server').io;
const uuid = require('uuid');
const _ = require('lodash');

let clients = {};

io.on('connection', (socket) => {
    let id = uuid.v1();

    console.log('connection made', id);
    socket.emit('status', {
        status: 'ok',
        id: id
    });
});