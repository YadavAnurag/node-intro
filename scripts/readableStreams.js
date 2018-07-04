var request = require('request');

var s = request('http://localhost:3000');

console.log("Is returned s is readable?? "+ s.readable);


s.on('data', function(chunk){
  console.log(">>>Data>>>\n\n\n"+ chunk);

});

s.on('end', function(){
  console.log("\n\n\n>>>>Done>>>\n\n\n\n");

});

s.on('error', function(err){
  console.log("\n\nError occured \n\n"+ err);

});

s.on('close', function(){
  console.log("\n\n\nStream has been closed\n");

});
