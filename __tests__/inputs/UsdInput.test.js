import React from 'react';
import UsdInput from 'src/inputs/UsdInput';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;

test('Testing UsdInput snapshot', () => {
	store = mockStore({});
	const wrapper = shallow(<UsdInput store={store}/>);
    expect(wrapper).toMatchSnapshot();
});