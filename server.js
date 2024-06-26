const net = require("net");

const server = net.createServer();

server.listen(50541, () => {
  console.log("Server listening on port 50541!");
});

// server.js
// add this line after server is created, before listen is called
server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there!");

// server.js
client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
});


});

