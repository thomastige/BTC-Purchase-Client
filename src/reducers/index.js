import { combineReducers } from 'redux';
import btcFxRateReducer from './btcFxRateReducer';
import usdInputReducer from './usdInputReducer';
import walletReducer from './walletReducer';

const reducers = combineReducers({
  btcFxRateReducer,
  usdInputReducer,
  walletReducer
})

export default reducers