import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

/*
USD Input component. Contains the label and the input form for the USD amount to be converted to BTC.
*/
class UsdInput extends React.Component {

	constructor(props){
		super(props);
		this.props.dispatch(actions.setUsdInput(''));
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		if (this.props.btcFxRateReducer != undefined && this.props.btcFxRateReducer != 0) {
			var newValue = e.target.value
			this.props.dispatch(actions.setUsdInput(newValue));
		}
	}
	
	render() {
		return (
			<div>
				<input value="USD" className="inputLabel" id="UsdInputLabel" readOnly/>
				<br/>
				<br/>
				<input value={this.props.usdInput} id="usdInput" onChange={this.handleChange} placeholder={this.props.placeholderText}/>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch) {
	var placeholderText = "Enter your amount";
	if (dispatch.btcFxRateReducer == undefined || dispatch.btcFxRateReducer == 0) {
		placeholderText = "Fetching Exchange Rates...";
	}
	return { 
		placeholderText: placeholderText,
		btcFxRateReducer: dispatch.btcFxRateReducer,
		usdInput: dispatch.usdInputReducer,
		actions: bindActionCreators(actions.setUsdInput, dispatch)
	}
}
export default connect(mapDispatchToProps)(UsdInput);