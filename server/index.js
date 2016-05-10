var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var util = require('util');
var clients = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	//track connected clients via log
	clients.push(socket.id);
	var clientConnectedMsg = 'User connected ' + util.inspect(socket.id) + ', total: ' + clients.length;
	io.emit('chat message', clientConnectedMsg);
	console.log(clientConnectedMsg);

	//track disconnected clients via log
	socket.on('disconnect', function(){
		clients.pop(socket.id);
		var clientDisconnectedMsg = 'User disconnected ' + util.inspect(socket.id) + ', total: ' + clients.length;
		io.emit('chat message', clientDisconnectedMsg);
		console.log(clientDisconnectedMsg);
	})

	//multicast received message from client
	socket.on('chat message', function(msg){
		var combinedMsg = socket.id.substring(0,4) + ': ' + msg;
		io.emit('chat message', combinedMsg);
		console.log('multicast: ' + combinedMsg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
