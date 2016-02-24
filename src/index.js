var rx = require('rx')

// Rover models
var Point = require('./model/point')
var Rover = require('./model/rover')

// Subscribe to the event stream of pressed keys
var pressedKeys$ = require('./stream/pressed-keys')
pressedKeys$.subscribe(function(pressedKeys) {
  document.getElementById('pressed-keys').innerHTML = pressedKeys.join(',')
})

// Subscribe to the event stream that contains the position of the rover
var initialRover = Rover(Point(0, 0), 'N')
var rover$ = require('./rover')(initialRover)
rover$.subscribe(function(rover) {
  console.log(rover);
  document.getElementById('rover-position').innerHTML = rover.toString()
})
