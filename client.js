const net = require("net");

// establishes a connection with the game server
const connect = function () {

  console.log("Connecting...");
  
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });



  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connection is successfully established!");
    conn.write("Name: Sor");
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");
    
  });

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("incoming data: ", data);
  });






  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
  module.exports = connect; 