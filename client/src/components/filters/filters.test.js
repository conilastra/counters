import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from './Filters';

configure({ adapter: new Adapter() });

describe('Filters', () => {
	it('renders without crashing', () => {
		const filter = {
			greater: false,
			greaterQuery: '',
			less: false,
			lessQuery: ''
		};
		shallow(<Filters value={filter} />);
	});

	it('has a toggle behavior that changes display when clicked', () => {
		const filter = {
			greater: false,
			greaterQuery: '',
			less: false,
			lessQuery: ''
		};

		const wrapper = shallow(<Filters value={filter} />);
		expect(wrapper.find('main').hasClass('hide')).toEqual(true);
		wrapper.find('header').simulate('click');
		expect(wrapper.find('main').hasClass('show')).toEqual(true);
		wrapper.find('header').simulate('click');
		expect(wrapper.find('main').hasClass('hide')).toEqual(true);
	});

	it('calls handleFilter when the "less than" input has a value', () => {
		const filter = {
			greater: false,
			greaterQuery: '',
			less: false,
			lessQuery: ''
		};

		const actions = {
			handleFilter: jest.fn()
		};

		const wrapper = shallow(<Filters value={filter} actions={actions} />);
		wrapper.find('input').at(0).simulate('change', { target: { value: 1 } });
		expect(actions.handleFilter.mock.calls).toEqual([ [ 'less', 'lessQuery', 1 ] ]);
	});

	it('calls handleFilter when the "greater than" input has a value', () => {
		const filter = {
			greater: false,
			greaterQuery: '',
			less: false,
			lessQuery: ''
		};

		const actions = {
			handleFilter: jest.fn()
		};

		const wrapper = shallow(<Filters value={filter} actions={actions} />);
		wrapper.find('input').at(1).simulate('change', { target: { value: 1 } });
		expect(actions.handleFilter.mock.calls).toEqual([ [ 'greater', 'greaterQuery', 1 ] ]);
	});
});
