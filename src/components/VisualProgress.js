import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import turnAction from '../action/Turn'


class VisualProgress extends PureComponent {

  render() {
    return (
      <div>
          <table>
            <tr id="row1">
            <button className="square" onClick={() => alert('click')}>
            {this.props.value}
            </button>

              <td className="square">{this.props.progress[1]}</td>
              <td className="square">{this.props.progress[2]}</td>
            </tr>
            <tr id="row2">
              <td className="square">{this.props.progress[3]}</td>
              <td className="square">{this.props.progress[4]}</td>
              <td className="square">{this.props.progress[5]}</td>
            </tr>
            <tr id="row3">
              <td className="square">{this.props.progress[6]}</td>
              <td className="square">{this.props.progress[7]}</td>
              <td className="square">{this.props.progress[8]}</td>
            </tr>
          </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      progress: state.turns
  }
}
const mapDispatchToProps = {turnAction: turnAction}

export default connect(mapStateToProps,mapDispatchToProps)(VisualProgress)
