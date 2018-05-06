import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './src/containers/App.jsx';
import reducers from './src/reducers';

const store = createStore(reducers);

ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>
	, document.getElementById('app'))
;