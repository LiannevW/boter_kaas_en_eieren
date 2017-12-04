export const TURN = 'TURN'

export default (newTurn) => {
  return {
    type: TURN,
    payload: newTurn
  }
}
