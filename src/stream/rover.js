var pressedKeys$ = require('./pressed-keys')

// Map keyCodes tp rover method names
var keyToAction = {
  38: 'forward',
  40: 'backward',
  37: 'rotateLeft',
  39: 'rotateRight',
}

// Create a stream of event with the current actions
module.exports = pressedKeys$
  .flatMap(function(pressedKeys) {
    return pressedKeys
  })
  .filter(function(key) {
    return keyToAction.hasOwnProperty(key)
  })
  .map(function(key) {
    return keyToAction[key]
  })
