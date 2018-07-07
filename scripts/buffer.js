var os = require('os');
var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('Hello').toString('base64');

console.log(b.toString('utf-8', 0, 3));

console.log('hi'+os.EOL+'this');
