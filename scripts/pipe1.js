//piping readable to writable

var request = require('request');

// var s = request("http://localhost:3000");

// s.pipe(process.stdout);

request("http://localhost:3000").pipe(process.stdout);
