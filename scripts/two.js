// var one = require('./one');

// one.doIt(12, function(err, a){
//     console.log(err);
//     a = i;
//     console.log('anu');

// });

// console.log(one.foo);


var one = require('./one');

var processResults = function(err, results, time){
  if(err){
    console.log('Error'+err.message);
  }
  else{
    console.log('The results are'+results + "("+ time+"ms) ");
  }
};

for(var i=0; i<10; i++){
  console.log('Calling evenDoubler with parameter'+i);
  one.evenDoubler(i, processResults);
}
