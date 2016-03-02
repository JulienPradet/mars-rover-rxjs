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
      "translate("+(props.rover.position.x)+", "+(props.gridSize.height - props.rover.position.y - 1)+")"+
      " rotate("+directionToRotation[props.rover.direction]+" "+(0.5)+" "+(0.5)+")"+
      " scale("+1+","+1+")"
    }>
      <polygon fill="red" points="0,0 0.5,1 1,0" />
    </g>
  )
}
