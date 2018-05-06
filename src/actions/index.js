import * as actionType from './ActionType';

export const setBtcFxRate = (value) => ({
  type: actionType.SET_BTC_FXRATE,
  payload: value
});

export const setUsdInput = (value) => ({
  type: actionType.SET_USD_INPUT,
  payload: value
});

export const initializeWallet = (usd, btc) => ({
	type: actionType.INITIALIZE_WALLET,
	payload: {
		usd: usd,
		btc: btc
	}
	
})
export const updateWallet = (usd, btc) => ({
	type: actionType.UPDATE_WALLET,
	payload: {
		usd: usd,
		btc: btc
	}
	
})