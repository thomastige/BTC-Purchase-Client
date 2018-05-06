import React from 'react';
import { connect } from 'react-redux';

/*
BTC Input component. Contains the label and the display of the value in BTC for the amount entered in the USD input. 
Both components are read-only.
*/
class BtcInput extends React.Component {

	render() {
		return (
			<div>
				<input value="BTC" className="inputLabel" readOnly/>
				<br/>
				<br/>
				<input value={this.props.btcValue} id="btcDisplay" placeholder="Display Quote" readOnly/>
			</div>
		);
	}
}
function mapStateToProps(state){
	var btcValue = 0;
	if (state.btcFxRateReducer != undefined
		&& state.usdInputReducer != undefined 
		&& state.usdInputReducer != "") {
		btcValue = state.usdInputReducer * state.btcFxRateReducer;
	}
	if (btcValue == 0) {
		btcValue = ""
	}
	return {
		btcValue: btcValue
	};
}
export default connect(mapStateToProps)(BtcInput);