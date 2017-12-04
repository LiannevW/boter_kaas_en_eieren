import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class VisualProgress extends PureComponent {
  render() {
    return (
      <div>

          <table>
            <tr id="row1">
              <td className="square">{this.props.progress}</td>
              <td className="square">O</td>
              <td className="square"></td>
            </tr>
            <tr id="row2">
              <td className="square"></td>
              <td className="square">X</td>
              <td className="square"></td>
            </tr>
            <tr id="row3">
              <td className="square"></td>
              <td className="square">O</td>
              <td className="square">X</td>
            </tr>
          </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      progress_0: state.turns[0]
  }
}
export default connect(mapStateToProps)(VisualProgress)
