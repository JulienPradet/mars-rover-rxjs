var rx = require('rx');
var Point = require('./point');
var Rover = require('./rover');

var keyDown$ = rx.Observable.fromEvent(document, 'keydown')
  .map(function(e) {
    return {
      action: 'down',
      key: e.key || e.which
    }
  });

var keyUp$ = rx.Observable.fromEvent(document, 'keyup')
  .map(function(e) {
    return {
      action: 'up',
      key: e.key || e.which
    }
  });

var pressedKeys$ = rx.Observable.merge(keyDown$, keyUp$)
  .scan(
    function(acc, action) {
      acc[action.key] = action.action === 'down'
      return acc;
    },
    {}
  )

pressedKeys$.subscribe(function(pressedKeys) {
  var pressedKeys = Object.keys(pressedKeys)
    .filter(function(key) { return pressedKeys[key] })
    .join(', ');
  document.getElementById('pressed-keys').innerHTML = pressedKeys
})

var action$ = keyDown$
  .pluck('key')
  .map(function(key) {
    if(key === 38) {
      return 'forward'
    } else if(key === 40) {
      return 'backward'
    } else if(key === 37) {
      return 'rotateLeft'
    } else if(key === 39) {
      return 'rotateRight'
    }
  })

var rover$ = action$.scan(
  function(rover, action) {
    return rover[action]()
  },
  Rover(Point(0, 0), 'E')
)

rover$.subscribe(function(rover) {
  console.log(rover);
  document.getElementById('rover-position').innerHTML = rover.toString()
})
