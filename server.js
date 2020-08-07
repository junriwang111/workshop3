var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
var path = require('path');
require('./routes/index.js')(app, path);
require('./routes/account.js')(app, path);

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    // console.log('My First Nodejs Server!');
    console.log('Server listening on: ' + host + 'port: ' + port);
});