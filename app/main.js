
var parkingLot=require('./parking-lot');

console.log("Hello!");
var count=0;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Press 1 to Park and 2 to Unpark?\n", function(answer)
{
  var disp = parkingLot().parking(answer);
  console.log(disp);
  rl.close();
});
