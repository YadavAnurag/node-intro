var fs = require('fs');

if(fs.existsSync('temp')){
  console.log('Directory exits, removing.....');


  if(fs.existsSync('temp/new.txt')){
    fs.unlinkSync('temp/new.txt');
  }
  fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err){
  fs.exists('temp', function(exists){
    if(exists){
      process.chdir('temp');
      fs.appendFile('test.txt', 'This is some content for the file', function(err){
        if(err) console.log(err);

        fs.rename('test.txt', 'new.txt', function(err){
          if(err){
            console.log(err);

          }
          fs.stat('new.txt', function(err, stats){
            console.log('File size '+ stats.size + 'bytes');
            fs.readFile('new.txt', function(err, data){
              console.log('File content '+data.toString());
            });
          });
        });
      });
    }
  });
});
