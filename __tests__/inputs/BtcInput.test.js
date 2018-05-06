import React from 'react';
import BtcInput from 'src/inputs/BtcInput';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;

test('testing BtcInput snapshot', () => {
	store = mockStore({});
	const wrapper = shallow(<BtcInput store={store}/>);
    expect(wrapper).toMatchSnapshot();
	expect(wrapper.find('BtcInput').props().value).toBe(undefined)
});

test('testing BtcInput value is set to 1', () => {
	store = mockStore({usdInputReducer: 1, btcFxRateReducer: 1});
	const wrapper = mount(<BtcInput store={store}/>);
	expect(wrapper.find('input').at(1).props().value).toBe(1);
});

test('testing BtcInput value is set to empty string when missing values, and not NaN', () => {
	store = mockStore({usdInputReducer: 1});
	const wrapper = mount(<BtcInput store={store}/>);
	expect(wrapper.find('input').at(1).props().value).toBe('');
});