// var count = 3;

// var doIt = function(i, callback){
// }

// module.exports.doIt = doIt;

// module.exports.foo = 'foo';



var maxTime = 1000;

//if input is even, double it
//if input is odd, error
// (call takes random amount of time < 1s)

var evenDoubler = function(v, callback){
  var waitTime = Math.floor(Math.random()*(maxTime+1));
  if(v%2){
    setTimeout(function(){
      callback(new Error('Odd input'));
    }, waitTime);
  }
  else{
    setTimeout(()=>{
      callback(null, v*2, waitTime);
    }, waitTime);
  }
};


module.exports.evenDoubler = evenDoubler;
