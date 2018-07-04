var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

request("http://localhost:3000").pipe(zlib.createGzip()).pipe(fs.createWriteStream('ds-sir-portfolio.html.gz'));
