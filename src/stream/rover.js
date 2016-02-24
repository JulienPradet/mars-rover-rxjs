var pressedKeys$ = require('./pressed-keys')

// Map keyCodes tp rover method names
var keyToAction = {
  38: 'forward',
  40: 'backward',
  37: 'rotateLeft',
  39: 'rotateRight',
}

// Create a stream of event with the current actions
var action$ = pressedKeys$
  .flatMap(function(pressedKeys) {
    return pressedKeys
  })
  .filter(function(key) {
    return keyToAction.hasOwnProperty(key)
  })
  .map(function(key) {
    return keyToAction[key]
  })

// Create a rover stream that contains the current position of the rover
module.exports = function(initialRover) {
  return action$.scan(
    function(rover, action) {
      return rover[action]()
    },
    initialRover
  )
}
