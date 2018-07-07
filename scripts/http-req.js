var http = require('http');

var options = {
  host: 'localhost',
  port: 3000,
  method: 'GET',
  path: '/'
};

var req = http.request(options, function(err,res){
  console.log(res.statusCode);
  res.pipe(process.stdout);
});

req.end();
