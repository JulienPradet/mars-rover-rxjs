var roverAction$ = require('./rover')

// Create a rover stream that contains the current position of the rover
module.exports = function(initialGrid) {
  return roverAction$.scan(
    function(grid, action) {
      return grid.moveRover(action)
    },
    initialGrid
  )
}
