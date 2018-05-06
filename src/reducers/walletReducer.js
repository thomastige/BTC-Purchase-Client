import * as actionType from '../actions/ActionType';

const walletReducer = (state = 0, action) => {
	let newState;
	switch (action.type) {
		case actionType.INITIALIZE_WALLET:
		return newState = action.payload; 
	case actionType.UPDATE_WALLET:
		return newState = action.payload;
	default:
		return state
	}
}

export default walletReducer;