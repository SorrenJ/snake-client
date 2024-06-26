let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput, setupInput);
  return stdin;
  

};


// specifies what happens when "data:" is received from stdin...  - key inputs
const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
    
  if (key === 'a') {
    connection.write("Move: left");
  }
    
  if (key === 's') {
    connection.write("Move: down");
  }
    
  if (key === 'd') {
    connection.write("Move: right");
  }
  
  // Canned Message
  if (key === 't') {
    connection.write("Say: Hello there!");
  }  

  /*
  "Move: up" - move up one square (unless facing down)
  "Move: down" - move down one square (unless facing up)
  "Move: left" - move left one square (unless facing right)
  "Move: right" - move left one square (unless facing left)
*/
};

module.exports = {
  setupInput
};
