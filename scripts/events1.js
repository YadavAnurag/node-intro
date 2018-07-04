var EventEmitter = require('events').EventEmitter;

var getResource = function (c) {
  var e = new EventEmitter();

  process.nextTick(function () {
    var count = 0;
    e.emit('start');

    var t = setInterval(function () {
      e.emit('data', ++count);
      if (count === c) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });

  return (e);
};


var r = getResource(5);

r.on('start', () => {
  console.log("I've started");
});

r.on('data', (d) => {
  console.log("I received data -> " + d);
});

r.on('end', () => {
  console.log("Process has been end");
});
