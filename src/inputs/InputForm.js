import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsdInput from './UsdInput';
import BtcInput from './BtcInput';

import * as actions from '../actions';

/*
Contains both BTC and USD input components, as well as the Trade button and its handler.
*/
class InputForm extends React.Component {

	constructor(props) {
		super(props)
		this.props.dispatch(actions.initializeWallet(156.12, 0));
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		var usd = this.props.usdValue;
		var btc = this.props.btcValue;
		this.props.dispatch(actions.updateWallet(usd, btc));
		this.props.dispatch(actions.setUsdInput(''));
	}

   render() {
      return (
         <div>
			<p>Trade</p>
			<table>
				<tbody>
					<tr>
						<td>
							<UsdInput/>
						</td>
					</tr>
				</tbody>
			</table>
			<p>For</p>
			<table>
				<tbody>
					<tr>
						<td>
							<BtcInput/>
						</td>
					</tr>
					<tr>
						<td>
							<button id="tradeButton" onClick={this.handleClick}>Trade</button>
						</td>
					</tr>
				</tbody>
			</table>
		 </div>
      );
   }
}

function mapStateToProps(state){
	var currentUsd = state.walletReducer.usd;
	var currentBtc = state.walletReducer.btc;
	var newUsd = currentUsd;
	var newBtc = currentBtc;
	if (state.usdInputReducer <= currentUsd) {
		newUsd = currentUsd - state.usdInputReducer;
		newBtc = newBtc + state.btcFxRateReducer * state.usdInputReducer;
	}
	return {
		usdValue: newUsd,
		btcValue: newBtc,
		actions: bindActionCreators(actions.updateWallet, state) 
	}
}
export default connect(mapStateToProps)(InputForm);