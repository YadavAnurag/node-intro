var PORT  = normalizePort(process.env.PORT || 3000);

var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(PORT, process.env.IP, ()=>{
  console.log(`HTTP server started at ${process.env.IP}:${PORT}`);
});

// console.log(process.env);

function normalizePort(val){
  var port = parseInt(val, 10);

  if(isNaN(port)){
    return val;
  }

  if(port >= 0){
    return port;
  }
  return false
}
