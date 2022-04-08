# Socket.IO Client Unreal Example Project
Reference implementation of socket.io chat client in ue5 using blueprints and umg.

Unreal Client Plugin repository: https://github.com/getnamo/socketio-client-unreal

Post questions to the [SocketIO Unreal Forum Thread](https://forums.unrealengine.com/showthread.php?110680-Plugin-Socket-io-Client) or contribute to or open new issues at https://github.com/getnamo/socketio-client-unreal-example/issues.

Feel free to fork, update, contribute, or add other examples.

## Installation and Setup

### Short Video

[![Install and Go](https://img.youtube.com/vi/RqjpWukQwxs/0.jpg)](https://www.youtube.com/watch?v=RqjpWukQwxs)

### Download
1. [Download Latest Release](https://github.com/getnamo/socketio-client-unreal-example/releases)
2. Unzip into a folder of your choice

### Server and Web Client
1. [Install node.js](https://nodejs.org/dist/v8.2.1/node-v8.2.1-x64.msi)
2. Navigate to server and open a command window at address (e.g. shift right click folder and _open command window here_)
3. type ```npm install``` to install dependencies
4. type ```node index``` to start the server
5. Use the _WebClient_ shortcut in the zip root folder or type ```localhost:3000``` in your browser to test the web client

### Unreal Client
1. Navigate to _sioclient_ folder and Open _sioclient.uproject_
2. Once loaded, hit ```Play``` the client should auto-connect to your server
3. watch messages from your web client stream in or press ```m``` to send a basic message to all clients.
4. press ```enter``` to capture keyboard focus

### Notes
* Ending play in unreal client will auto-disconnect the client.
* Closing the command window will shutdown your server.
* Closing your web browser will auto-disconnect your web client
* Blueprints used should be fairly documented, explore them to find out how it all works
* See https://github.com/getnamo/socketio-client-unreal for detailed plugin API

## License
MIT
