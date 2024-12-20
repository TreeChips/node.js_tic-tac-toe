let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  gameState = [0, 1, 2, 3, 4, 5,6,7,8]
  takenMoves = [];
  omove = true;
  function logState() {
    console.log(" "+gameState[0]+" | "+gameState[1]+" | "+gameState[2]);
    console.log("-----------");
    console.log(" "+gameState[3]+" | "+gameState[4]+" | "+gameState[5]);
    console.log("-----------");
    console.log(" "+gameState[6]+" | "+gameState[7]+" | "+gameState[8]);
  }
  function testWin() {
if (
    (gameState[0] === gameState[1] && gameState[1] === gameState[2]) || // Top row
    (gameState[3] === gameState[4] && gameState[4] === gameState[5]) || // Middle row
    (gameState[6] === gameState[7] && gameState[7] === gameState[8]) || // Bottom row
    (gameState[0] === gameState[3] && gameState[3] === gameState[6]) || // Left column
    (gameState[1] === gameState[4] && gameState[4] === gameState[7]) || // Middle column
    (gameState[2] === gameState[5] && gameState[5] === gameState[8]) || // Right column
    (gameState[0] === gameState[4] && gameState[4] === gameState[8]) || // Diagonal top-left to bottom-right
    (gameState[2] === gameState[4] && gameState[4] === gameState[6])    // Diagonal top-right to bottom-left
) {      
    if (omove) {
        console.log("X Wins");
      } else {
        console.log("O Wins");
      } 
      rl.close();
    }
  }
  function logMove(n) {
    takenMoves.push(n);
    if (omove) {
      gameState[n] = "O"
      takenMoves.push(n);
      omove = false;
    } else {
      gameState[n] = "X"
      takenMoves.push(n);
      omove = true;
    }
    for (q =0;q<10; q++) {
      console.log(" ");
    }
    logState();
    testWin();
      if (takenMove.length == 9) {
          console.log("Tie");
          rl.close();
  }
  logState()
  rl.on('line', (input) => {
    if (input == "close") {
        rl.close();
    }
      n = parseInt(input);
    if (isNaN(n)) {
      console.log("please input a number");
      logState();
    } else if (!takenMoves.includes(n) && n > -1 && n < 9) {
      logMove(n)
    } else {
      console.log("please input a valid number");
      logState();
    }
  });
