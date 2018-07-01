var request = require('request');

request('http://yadavanurag.github.io/', function(err, response, body){
  if(!error && response.statusCode === 200){
    console.log(body);
    console.log(response);
  }
});
