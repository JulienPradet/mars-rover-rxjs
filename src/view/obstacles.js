import React from 'react'

module.exports = function Obstacles(props) {
  return (
    <g>
      { props.obstacles.map(function(obstacle, key) {
        return <rect key={key} width={1} height={1} x={obstacle.x} y={props.gridSize.width - obstacle.y - 1} fill="black" />
      }) }
    </g>
  )
}
