import * as actionType from '../actions/ActionType';

const usdInputReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.SET_USD_INPUT:
      return newState = action.payload;
    default:
      return state
  }
}

export default usdInputReducer;