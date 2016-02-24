var rx from 'rx'

// Listen to keyDown events (keyboard key has been pressed)
var keyDown$ = rx.Observable.fromEvent(document, 'keydown')
  .map(function(e) {
    return {
      action: 'down',
      key: e.key || e.which
    }
  })

// Listen to keyUp events (keyboard key has been released)
var keyUp$ = rx.Observable.fromEvent(document, 'keyup')
  .map(function(e) {
    return {
      action: 'up',
      key: e.key || e.which
    }
  })

// Create a stream that contains arrays of the current keys being pressed
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

module.exports = pressedKeys$
