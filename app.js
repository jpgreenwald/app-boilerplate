'use strict';

const server = require('./server/web_server').server;
const port = process.env.PORT || 3000;

require('./server/events');

server.listen(port, () => {
    console.log(`listening on ${port}`);
});