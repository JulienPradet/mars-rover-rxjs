var React = require('react')
var grid$Factory = require('../stream/grid')
var Rover = require('./rover')
var Grid = require('./grid')

function scale(displayWidth, actualWidth) {
  return function(x) {
    return x * displayWidth / actualWidth
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: props.initialGrid
    }
  }

  updateGrid(grid) {
    this.state.grid = grid
    this.setState(this.state)
  }

  componentDidMount() {
    this.state._disposable = grid$Factory(this.props.initialGrid)
      .subscribe(this.updateGrid.bind(this))
  }

  componentWillUnmount() {
    this.state._disposable.dispose();
  }

  render() {
    var grid = this.state.grid

    var gameContainerStyle = {
      position: 'relative',
      width: this.props.width,
      height: this.props.height
    }

    var scales = {
      scaleX: scale(this.props.width, grid.width),
      scaleY: scale(this.props.height, grid.height),
    }

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Grid key="grid" width={ grid.width } height={ grid.height } {...scales} />
        <Rover rover={ grid.rover } {...scales} width={this.props.width / grid.width} height={this.props.height / grid.height} gridSize={{width: grid.width, height: grid.height}}/>
      </svg>
    )
  }
}

module.exports = Game
