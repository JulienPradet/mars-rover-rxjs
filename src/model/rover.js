// A rover is a point that has a direction
var Point = require('./point')

/*
 * When a rover moves forward, a point should be added to his current position
 * This point should depend on the direction of the rover
 * This object is the representation of this mapping
 */
var directionToPoint = {
  'N': Point(0, 1),
  'E': Point(1, 0),
  'S': Point(0, -1),
  'W': Point(-1, 0),
}

/*
 * A rover can rotate to the left or to the right, resulting in a changing
 * direction.
 * This array represents the order of the direction if the rover continuously
 * rotates to the right.
 */
var directionOrder = ['N', 'E', 'S', 'W']

/**
 * Helper method that rotates a direction either left or right.
 * @param string direction N, E, S or W
 * @param int    order     defines if its left (1) or right (-1)
 */
function rotate(direction, order) {
  var currentDirectionIndex = directionOrder.indexOf(direction)
  var newDirectionIndex = (currentDirectionIndex + order + directionOrder.length) % directionOrder.length
  return directionOrder[newDirectionIndex]
}

// Methods that can be applied to a rover
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
