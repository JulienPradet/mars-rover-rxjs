var React = require('react')
var rover$Factory = require('../stream/rover')

var directionToCharacter = {
  N: '^',
  S: 'v',
  E: '>',
  W: '<'
}

function computePositionStyle(rover) {
  return {
    position: 'absolute',
    top: 0 - rover.position.y * 5,
    left: rover.position.x * 5,
    fontSize: '5em',
  }
}

function computeDirectionCharacter(rover) {
  return directionToCharacter.hasOwnProperty(rover.direction)
    ? directionToCharacter[rover.direction]
    : '.'
}

class Rover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rover: props.initialRover
    }
  }

  updateRover(rover) {
    this.state.rover = rover
    this.setState(this.state)
  }

  componentDidMount() {
    this.state._disposable = rover$Factory(this.props.initialRover)
      .subscribe(this.updateRover.bind(this))
    this.setState(this.state)
  }

  componentWillUnmount() {
    this.state._disposable.dispose();
  }

  render() {
    const roverStyle = computePositionStyle(this.state.rover)
    const roverCharacter = computeDirectionCharacter(this.state.rover)
    return (
      <div style={ roverStyle }>
        { roverCharacter }
      </div>
    )
  }
}

module.exports = Rover
