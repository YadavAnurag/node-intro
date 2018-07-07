var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url === '/file.txt'){
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  }else{
    res.end('Hello World');
  }
}).listen(3000, 'localhost', function(){
  console.log('Server is running on port 3000');
});
