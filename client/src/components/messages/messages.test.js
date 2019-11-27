import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NoCounters, NoMatchingItems } from './messages';

configure({ adapter: new Adapter() });

describe('NoCounters', () => {
	it('renders without crashing', () => {
		shallow(<NoCounters />);
	});
});

describe('NoMatchingItems', () => {
	it('renders without crashing', () => {
		const onGoBack = jest.fn();
		shallow(<NoMatchingItems onGoBack={onGoBack} />);
	});

	it('calls onGoBack when "Go back" is clicked', () => {
		const onGoBack = jest.fn();
		const wrapper = shallow(<NoMatchingItems onGoBack={onGoBack} />);
		wrapper.find('span').simulate('click');
		expect(onGoBack.mock.calls).toEqual([ [] ]);
	});
});
