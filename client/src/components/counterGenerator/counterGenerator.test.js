import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterGenerator from './counterGenerator';

configure({ adapter: new Adapter() });

describe('CounterGenerator', () => {
	it('renders without crashing', () => {
		mount(<CounterGenerator />);
	});

	it('has an input element', () => {
		const wrapper = shallow(<CounterGenerator />);
		expect(wrapper.exists('input')).toEqual(true);
	});

	it('changes display when the button is clicked', () => {
		const wrapper = shallow(<CounterGenerator />);
		expect(wrapper.find('input').hasClass('hidden')).toEqual(true);
		wrapper.find('button').simulate('click');
		expect(wrapper.find('input').hasClass('visible')).toEqual(true);
	});

	it('calls onNewCounter when the form is submitted', () => {
		const onNewCounter = jest.fn();
		const wrapper = shallow(<CounterGenerator onNewCounter={onNewCounter} />);
		wrapper.find('input').simulate('change', { target: { value: 'Test' } });
		wrapper.find('form').simulate('submit', { preventDefault: () => {} });
		expect(onNewCounter.mock.calls).toEqual([ [ 'Test' ] ]);
	});
});
