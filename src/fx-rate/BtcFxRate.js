import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

/*
This component is hidden but can be displayed for debugging purposes. It contains the functions that retrieve the latest BTC price and convert it to an exchange rate.
*/
class BtcFxRate extends React.Component{
	
	constructor(props) {
		super(props);
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'https://api.bitfinex.com/v1/pubticker/btcusd'
		fetch(proxyUrl + targetUrl)
		.then(response => {return response.json()})
		.then(json => {this.handleFxRateUpdate(json);});
	}
	
	handleFxRateUpdate(json){
		this.props.dispatch(actions.setBtcFxRate(1/json.last_price));
	}
	
	render () { return (
		<div hidden="true">
			{this.props.btcFxRate}
		</div>
	)}
}

function mapDispatchToProps(dispatch) {
	return { 
		actions: bindActionCreators(actions.setBtcFxRate, dispatch),
		btcFxRate: dispatch.btcFxRateReducer
	}
}
export default connect(mapDispatchToProps)(BtcFxRate);