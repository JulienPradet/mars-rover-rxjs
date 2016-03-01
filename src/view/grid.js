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
    <g width={props.scaleX(props.width)} height={props.scaleY(props.height)}>
      { range(0, props.width).map(function(x) {
        return <line key={"width"+x} x1={props.scaleX(x)} y1={0} x2={props.scaleX(x)} y2={props.scaleY(props.height)} stroke="#aaaaaa" strokeWidth={1} />
      }) }
        { range(0, props.width).map(function(y) {
          return <line key={"height"+y} y1={props.scaleY(y)} x1={0} y2={props.scaleY(y)} x2={props.scaleX(props.width)} stroke="#aaaaaa" strokeWidth={1} />
        }) }
    </g>
  )
}
