var rx = require('rx')

// Rover models
var Point = require('./model/point')
var Rover = require('./model/rover')
var Grid = require('./model/grid')

// Render the scene using React DOM
var React = require('react')
var ReactDOM = require('react-dom')
var Game = require('./view/game')

var initialGrid = Grid({ width: 20, height: 20 }).setRover(Rover(Point(10, 10), 'N'))

ReactDOM.render(
  <Game initialGrid={initialGrid} width={500} height={500} />,
  document.getElementById('rover')
)
