process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
  process.stdout.write('Data -> '+chunk);
});

process.stdin.on('end', function(){
  process.stderr.wirte('End\n');
});

process.on('SIGTERM', function(){
  process.stderr.wirte('Why are you trying to kill me ??');
});

console.log('Node is running on process.pid '+ process.pid);
console.log('Process title '+process.title);

