var http = require('http');
var fs = require('fs');
var app = require('express')();
var ent = require('ent'); // Security: Encode and decode HTML entities, avoids js injections

var server = http.createServer(app);
var io = require('socket.io').listen(server);

// Upload index.html to the client
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket, username){
    // When a new client's username is received, save it in a new session and send it to other clients
    socket.on('newClient', function(username){
        username = ent.encode(username);
        socket.username = username;
        socket.broadcast.emit('newClient', username);
    });

    // When server receives a new message from a client, 
    // get that client's username and send it with the message to other clients
    socket.on('message', function(message){
        message = ent.encode(message);
        socket.broadcast.emit('message', {username: socket.username, message: message});
    });
});

server.listen(8080);