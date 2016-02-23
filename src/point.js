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
