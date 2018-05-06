import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;


const fetchPromise = Promise.resolve({
	json: () => Promise.resolve({last_price: 0.12345})
});
global.fetch = () => fetchPromise;

describe('App', () => {
    it('renders without crashing', () => {
		const store = createStore(reducers);
        const div = document.createElement('div');
        ReactDOM.render(
			<Provider store={store}>
				<App/>
			</Provider>
		, div);
    });
});

test('Testing Snapshots', () => {
	const shallowWrapper = shallow(<App/>);
    expect(shallowWrapper).toMatchSnapshot();
	store = mockStore({walletReducer: {usd: 200, btc:0}});
	const mountWrapper = mount(<Provider store={store}><App/></Provider>);
    expect(mountWrapper).toMatchSnapshot();
});

test('Validate link between USD and BTC inputs', () => {
	store = mockStore({usdInputReducer: 1, btcFxRateReducer: 0.12345, walletReducer: {usd: 200, btc:0}});
	const wrapper = mount(<Provider store={store}><App/></Provider>);
	expect(wrapper.find('input').at(3).props().value).toBe(0.12345)
});