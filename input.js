let connection;


const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput, setupInput);
    return stdin;
  

};


  // specifies what happens when "data:" is received from stdin...  - key inputs
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
        process.exit();
      }
  };

  module.exports = {
    setupInput
  };
