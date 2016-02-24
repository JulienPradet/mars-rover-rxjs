var rx = require('rx')

// Rover models
var Point = require('./model/point')
var Rover = require('./model/rover')

// Subscribe to the event stream of pressed keys
var pressedKeys$ = require('./stream/pressed-keys')
pressedKeys$.subscribe(function(pressedKeys) {
  document.getElementById('pressed-keys').innerHTML = pressedKeys.join(',')
})

// Render the scene using React DOM
var React = require('react')
var ReactDOM = require('react-dom')
var RoverView = require('./view/rover')

var initialRover = Rover(Point(100, -100), 'N')

ReactDOM.render(
  <RoverView initialRover={initialRover} />,
  document.getElementById('rover')
)
