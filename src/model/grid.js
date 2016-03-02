import Rover from './rover'
import Point from './point'

var GridMethods = {
  setRover(rover) {
    return Grid({
      width: this.width,
      height: this.height,
      rover: rover,
      obstacles: this.obstacles
    })
  },

  addObstacle(obstacle) {
    return Grid({
      width: this.width,
      height: this.height,
      rover: this.rover,
      obstacles: [...this.obstacles, obstacle]
    })
  },

  removeObstacle(obstacle) {
    var index = this.obstacles.indexOf(obstacle)
    return Grid({
      width: this.width,
      height: this.height,
      rover: this.rover,
      obstacles: [...this.obstacles.slice(0, index), ...this.obstacles.slice(index+1)]
    })
  },

  isInside(point) {
    return (0 <= point.x && point.x < this.width) && (0 <= point.y && point.y < this.height)
  },

  isObstacle(position) {
    return this.obstacles.filter(function(obstacle) {
      return obstacle.x === position.x && obstacle.y === position.y
    }).length > 0
  },

  moveRover(action) {
    var movedRover = this.rover[action]()
    if(!this.isObstacle(movedRover.position)) {
      if(!this.isInside(movedRover.position)) {
        movedRover = Rover(
          Point(
            (movedRover.position.x + this.width) % this.width,
            (movedRover.position.y + this.height) % this.height
          ),
          movedRover.direction
        )
      }
      return this.setRover(movedRover)
    } else {
      return this
    }
  }
}

function Grid({ width, height, rover, obstacles }) {
  return Object.assign({
    width,
    height,
    rover,
    obstacles: obstacles || []
  }, GridMethods)
}

module.exports = Grid
