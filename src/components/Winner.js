import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Winner extends PureComponent {
  render() {
    return (
      <p>The winner is..</p>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      winner: state.turns
  }
}
export default connect(mapStateToProps)(Winner)
