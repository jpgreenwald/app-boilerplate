'use strict';

const express = require('express');
const compression = require('compression');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const _ = require('lodash');
const history = require('connect-history-api-fallback');

app.use(compression());
app.use(history());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/dist/', express.static(path.join(__dirname, '../', 'dist')));

let tenantOverride = {
    'artcraft': 'artcraft.epicdata.io',
    'devartcraft': 'devartcraft.epicdata.io'
}

app.get('/org-host/:orgId', (req, res) => {
    let lookup = (req.params.orgId || '').toLowerCase();
    res.send({
        host: _.result(tenantOverride, lookup, 'api.swsb.io'),
        'org_id': lookup
    });
});

module.exports.server = server;
module.exports.io = io;