const connect = require("./client");
//const net = require("net");


let conn = connect();
stdin.on("data", handleUserInput);

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };


  // specifies what happens when "data:" is received from stdin...  - key inputs
  const handleUserInput = function () {
    // your code here
  };





// Begin game
//game.start();
