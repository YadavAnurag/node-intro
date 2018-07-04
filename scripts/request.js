var request = require('request');
var fs = require('fs');

request('http://yadavanurag.github.io/', function(err, response, body){
  if(!err && response.statusCode === 200){
    console.log(body);
    fs.writeFileSync('./index.html', body, 'utf-8');
    console.log(response);
  }
});
