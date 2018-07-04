var request = require('request');
var fs = require('fs');

request("http://localhost:3000").pipe(fs.createWriteStream('ds-sir-portfolio.html'));
