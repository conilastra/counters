import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterHolder from './counterHolder';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';

configure({ adapter: new Adapter() });

describe('CounterHolder', () => {
	it('renders witohout crashing', () => {
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: '',
			order: 'desc'
		};
		shallow(<CounterHolder items={items} sort={sort} />);
	});

	it('handleSort is called when "Title" header is clicked', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: '',
			order: 'desc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		wrapper.find('th').at(0).simulate('click');
		expect(actions.handleSort.mock.calls).toEqual([ [ 'title' ] ]);
	});

	it('changes icon of "Title" when sorted order is ascending', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: 'title',
			order: 'asc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		expect(wrapper.find('th').at(0).contains(<TiArrowSortedDown />)).toEqual(true);
		expect(wrapper.find('th').at(0).contains(<TiArrowSortedUp />)).toEqual(false);
		expect(wrapper.find('th').at(0).contains(<TiArrowUnsorted />)).toEqual(false);
	});

	it('changes icon of "Title" when sorted order is descending', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: 'title',
			order: 'desc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		expect(wrapper.find('th').at(0).contains(<TiArrowSortedDown />)).toEqual(false);
		expect(wrapper.find('th').at(0).contains(<TiArrowSortedUp />)).toEqual(true);
		expect(wrapper.find('th').at(0).contains(<TiArrowUnsorted />)).toEqual(false);
	});

	it('handleSort is called when "#" header is clicked', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: '',
			order: 'desc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		wrapper.find('th').at(2).simulate('click');
		expect(actions.handleSort.mock.calls).toEqual([ [ 'count' ] ]);
	});

	it('changes icon of "#" when sorted order is ascending', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: 'count',
			order: 'asc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		expect(wrapper.find('th').at(2).contains(<TiArrowSortedDown />)).toEqual(true);
		expect(wrapper.find('th').at(2).contains(<TiArrowSortedUp />)).toEqual(false);
		expect(wrapper.find('th').at(2).contains(<TiArrowUnsorted />)).toEqual(false);
	});

	it('changes icon of "Title" when sorted order is descending', () => {
		const actions = {
			handleSort: jest.fn()
		};
		const items = [
			{
				title: 'Example',
				count: 0,
				id: 'fjfdg'
			},
			{
				title: 'Another one',
				count: 0,
				id: 'dfjn'
			}
		];
		const sort = {
			active: true,
			column: 'count',
			order: 'desc'
		};
		const wrapper = shallow(<CounterHolder actions={actions} items={items} sort={sort} />);
		expect(wrapper.find('th').at(2).contains(<TiArrowSortedDown />)).toEqual(false);
		expect(wrapper.find('th').at(2).contains(<TiArrowSortedUp />)).toEqual(true);
		expect(wrapper.find('th').at(2).contains(<TiArrowUnsorted />)).toEqual(false);
	});
});
