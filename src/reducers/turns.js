import TURN from '../action/Turn'
const turns = ["x","o","","","x","","","o","x"]

export default (state = turns, action ={}) => {
  switch(action.type) {
    case TURN :
      return state.concat([ action.payload ])
    default :
      return state
  }
}
