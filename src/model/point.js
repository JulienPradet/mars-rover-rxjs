// A point is an object described by an x and an y

// Methods on a point object
var PointMethods = {
  add(point) {
    return Point(
      this.x + point.x,
      this.y + point.y
    )
  },
  remove(point) {
    return Point(
      this.x - point.x,
      this.y - point.y
    )
  },
  // Should return a point that's symmetric by respect of the origin
  reverse() {
    return Point(
      0 - this.x,
      0 - this.y
    )
  },
  toString() {
    return 'Point('+this.x+'|'+this.y+')'
  },
}

function Point(x, y) {
  return Object.assign(
    {
      x: x,
      y: y
    },
    PointMethods
  )
}

module.exports = Point
