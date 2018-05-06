import * as actionType from '../actions/ActionType';

const btcFxRateReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.SET_BTC_FXRATE:
		
      return newState = state + action.payload;
    default:
      return state
  }
}

export default btcFxRateReducer;