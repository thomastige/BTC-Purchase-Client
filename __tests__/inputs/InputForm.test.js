import React from 'react';
import InputForm from 'InputForm';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;

test('testing InputForm snapshot', () => {
	store = mockStore({walletReducer: {usd: 0, btc: 0}});
	const wrapper = shallow(<InputForm store={store}/>);
    expect(wrapper).toMatchSnapshot();
});