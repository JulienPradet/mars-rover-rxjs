var rx = require('rx');
var Point = require('./point');
var Rover = require('./rover');

var keyDown$ = rx.Observable.fromEvent(document, 'keydown')
  .map(function(e) {
    return {
      action: 'down',
      key: e.key || e.which
    }
  })

var keyUp$ = rx.Observable.fromEvent(document, 'keyup')
  .map(function(e) {
    return {
      action: 'up',
      key: e.key || e.which
    }
  })

var pressedKeys$ = rx.Observable.merge(keyDown$, keyUp$)
  .scan(
    function(pressedKeys, keyEvent) {
      pressedKeys[keyEvent.key] = keyEvent.action === 'down'
      return pressedKeys;
    },
    {}
  )
  .map(function(pressedKeys) {
    return Object.keys(pressedKeys)
      .filter(function(key) {
        return pressedKeys[key];
      })
  })

pressedKeys$.subscribe(function(pressedKeys) {
  document.getElementById('pressed-keys').innerHTML = pressedKeys.join(',')
})

const keyToAction = {
  38: 'forward',
  40: 'backward',
  37: 'rotateLeft',
  39: 'rotateRight',
}

var action$ = pressedKeys$
  .flatMap(function(pressedKeys) {
    return pressedKeys
  })
  .filter(function(key) {
    return keyToAction.hasOwnProperty(key)
  })
  .map(function(key) {
    console.log(key);
    return keyToAction[key]
  })

var rover$ = action$.scan(
  function(rover, action) {
    return rover[action]()
  },
  Rover(Point(0, 0), 'N')
)

rover$.subscribe(function(rover) {
  console.log(rover);
  document.getElementById('rover-position').innerHTML = rover.toString()
})
