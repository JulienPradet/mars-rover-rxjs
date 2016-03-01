var React = require('react')
var rover$Factory = require('../stream/rover')

var directionToRotation = {
  N: 180,
  S: 0,
  E: 270,
  W: 90
}


function computeDirectionCharacter(rover) {
  return directionToCharacter.hasOwnProperty(rover.direction)
    ? directionToCharacter[rover.direction]
    : '.'
}

function computeStyle({ rover, scaleX, scaleY, width, height }) {
  return {
    position: 'absolute',
    bottom: scaleY(rover.position.y),
    left: scaleX(rover.position.x),
    width: width,
    height: height,
    textAlign: 'center',
  }
}

module.exports = function Rover(props) {
  return (
    <g transform={
      "translate("+props.scaleX(props.rover.position.x)+", "+props.scaleY(props.gridSize.height - props.rover.position.y - 1)+")"+
      " rotate("+directionToRotation[props.rover.direction]+" "+props.scaleX(0.5)+" "+props.scaleY(0.5)+")"+
      " scale("+props.scaleX(1)+","+props.scaleY(1)+")"
    }>
      <polygon fill="red" points="0,0 0.5,1 1,0" />
    </g>
  )
}
