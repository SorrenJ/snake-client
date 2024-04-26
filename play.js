const connect = require("./client");
//const net = require("net");


let conn = connect();


const setupInput = function (conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput, setupInput);
    return stdin;
  

};


  // specifies what happens when "data:" is received from stdin...  - key inputs
  const handleUserInput = function () {
    // your code here
    if (key === '\u0003') {
        process.exit();
      }
  };





// Begin game
//game.start();
