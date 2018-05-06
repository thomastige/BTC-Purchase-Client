import React from 'react';
import { connect } from 'react-redux';
import { setBtcFxRate } from '../actions'

import BtcFxRate from '../fx-rate/BtcFxRate'
import InputForm from '../inputs/InputForm'
import Wallet from '../wallet/Wallet'

/*
Root of the application. Renders the BtcFxRate (hidden at component level), Wallet and InputForm components.
*/
class App extends React.Component {

	constructor() {
		super();
	}
	
	render() {
	  return (
		 <div id="root">
			<BtcFxRate/>
			<Wallet/>
			<InputForm/>
		 </div>
	  );
	}
}
export default App;