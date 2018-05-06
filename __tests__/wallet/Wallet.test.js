import React from 'react';
import Wallet from 'Wallet';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;

test('Testing Wallet snapshot', () => {
	store = mockStore({walletReducer: {usd: 0, btc: 0}});
	const wrapper = shallow(<Wallet store={store}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Testing Wallet values', () => {
	var usdValue = '150.00';
	var btcValue = '12.00000000';
	store = mockStore({walletReducer: {usd: usdValue, btc: btcValue}});
	const wrapper = mount(<Wallet store={store}/>);
	expect(wrapper.find('td').at(1).html()).toBe('<td>' + usdValue + '</td>');
	expect(wrapper.find('td').at(3).html()).toBe('<td>' + btcValue + '</td>');
});