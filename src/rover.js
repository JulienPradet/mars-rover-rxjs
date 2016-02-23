var Point = require('./point')

var directionToPoint = {
  'N': Point(0, 1),
  'E': Point(1, 0),
  'S': Point(0, -1),
  'W': Point(-1, 0),
}

var directionOrder = ['N', 'E', 'S', 'W']
function rotate(direction, order) {
  var currentDirectionIndex = directionOrder.indexOf(direction)
  var newDirectionIndex = (currentDirectionIndex + order + directionOrder.length) % directionOrder.length
  return directionOrder[newDirectionIndex]
}

var RoverMethods = {
  forward: function forward() {
    return Rover(
      this.position.add(directionToPoint[this.direction]),
      this.direction
    )
  },

  backward: function backward() {
    return Rover(
      this.position.remove(directionToPoint[this.direction]),
      this.direction
    )
  },

  rotateLeft: function rotateLeft() {
    return Rover(
      this.position,
      rotate(this.direction, -1)
    )
  },

  rotateRight: function rotateRight() {
    return Rover(
      this.position,
      rotate(this.direction, 1)
    )
  },

  toString: function toString() {
    return 'Rover('+this.position.toString()+'|'+this.direction+')'
  }
}

function Rover(position, direction) {
  return Object.assign(
    {
      position: position,
      direction: direction
    },
    RoverMethods
  )
}

module.exports = Rover
