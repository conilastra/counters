import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Searchbox from './searchbox';

configure({ adapter: new Adapter() });

describe('CounterGenerator', () => {
	it('renders without crashing', () => {
		const value = '';
		const onSearch = jest.fn();
		mount(<Searchbox value={value} onSearch={onSearch} />);
	});

	it('has an input element', () => {
		const value = '';
		const onSearch = jest.fn();
		const wrapper = shallow(<Searchbox value={value} onSearch={onSearch} />);
		expect(wrapper.exists('input')).toEqual(true);
	});

	it('calls OnSearch when a search query is typed', () => {
		const value = '';
		const onSearch = jest.fn();
		const wrapper = shallow(<Searchbox value={value} onSearch={onSearch} />);
		wrapper.find('input').simulate('change', { target: { value: 'Test' } });
		expect(onSearch.mock.calls).toEqual([ [ 'Test' ] ]);
	});
});
