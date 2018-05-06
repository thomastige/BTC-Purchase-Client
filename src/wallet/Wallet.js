import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
Wallet component. Contains the current amounts available in the user's wallet in both USD and BTC.
*/
class Wallet extends React.Component {
	constructor(props) {
		super(props);
	}

   render() {
      return (
         <div>
			<p>Account Balance</p>
			<table id="wallet">
				<tbody>
					<tr>
						<td className="walletRowTitle">
							USD
						</td>
						<td>
							{this.props.usdValue}
						</td>
					</tr>
					<tr>
						<td className="walletRowTitle">
							BTC
						</td>
						<td>
							{this.props.btcValue}
						</td>
					</tr>
				</tbody>
			</table>
		 </div>
      );
   }
}
function mapStateToProps(state){
	return {
		usdValue: parseFloat(state.walletReducer.usd).toFixed(2),
		btcValue: parseFloat(state.walletReducer.btc).toFixed(8)
	};
}
export default connect(mapStateToProps)(Wallet);