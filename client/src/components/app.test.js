import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

configure({ adapter: new Adapter() });

describe('App', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});
