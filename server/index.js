const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const util = require('util');
const port = 3000;
const clients = [];

//Server Web Client
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//When a client connects, bind each desired event to the client socket
io.on('connection', function(socket){
	//track connected clients via log
	clients.push(socket.id);
	let clientConnectedMsg = 'User connected ' + util.inspect(socket.id) + ', total: ' + clients.length;
	io.emit('chat message', clientConnectedMsg);
	console.log(clientConnectedMsg);

	//track disconnected clients via log
	socket.on('disconnect', function(){
		clients.pop(socket.id);
		let clientDisconnectedMsg = 'User disconnected ' + util.inspect(socket.id) + ', total: ' + clients.length;
		io.emit('chat message', clientDisconnectedMsg);
		console.log(clientDisconnectedMsg);
	})

	//multicast received message from client
	socket.on('chat message', function(msg){
		let combinedMsg = socket.id.substring(0,4) + ': ' + msg;
		io.emit('chat message', combinedMsg);
		console.log('multicast: ' + combinedMsg);
	});
});

//Start the Server
http.listen(port, function(){
  console.log('listening on *:' + port);
});
