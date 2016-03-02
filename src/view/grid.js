import React from 'react'

function range(start, end) {
  const result = []
  for(let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

module.exports = function Grid(props) {
  return (
    <g width={props.width} height={props.height}>
      { range(0, props.width).map(function(x) {
        return <line key={"width"+x} x1={x} y1={0} x2={x} y2={props.height} stroke="#aaaaaa" strokeWidth={props.stroke} />
      }) }
      { range(0, props.width).map(function(y) {
        return <line key={"height"+y} y1={y} x1={0} y2={y} x2={props.width} stroke="#aaaaaa" strokeWidth={props.stroke} />
      }) }
    </g>
  )
}
