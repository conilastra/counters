import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './counter';

configure({ adapter: new Adapter() });

describe('Counter', () => {
	it('renders witohout crashing', () => {
		const item = {
			title: 'Example',
			count: 0
		};
		shallow(<Counter item={item} />);
	});
	it('handleSubstraction is called when "-" button is clicked', () => {
		const actions = {
			handleSubstraction: jest.fn(),
			handleAddition: jest.fn(),
			handleDelete: jest.fn()
		};
		const item = {
			title: 'Example',
			count: 0
		};
		const wrapper = shallow(<Counter actions={actions} item={item} />);
		wrapper.find('button').at(0).simulate('click');
		expect(actions.handleSubstraction.mock.calls).toEqual([ [ item ] ]);
		expect(actions.handleAddition.mock.calls).toEqual([]);
		expect(actions.handleDelete.mock.calls).toEqual([]);
	});

	it('handleAddition is called when "+" button is clicked', () => {
		const actions = {
			handleSubstraction: jest.fn(),
			handleAddition: jest.fn(),
			handleDelete: jest.fn()
		};
		const item = {
			title: 'Example',
			count: 0
		};
		const wrapper = shallow(<Counter actions={actions} item={item} />);
		wrapper.find('button').at(1).simulate('click');
		expect(actions.handleAddition.mock.calls).toEqual([ [ item ] ]);
		expect(actions.handleSubstraction.mock.calls).toEqual([]);
		expect(actions.handleDelete.mock.calls).toEqual([]);
	});

	it('handleDelete is called when "Delete" button is clicked', () => {
		const actions = {
			handleSubstraction: jest.fn(),
			handleAddition: jest.fn(),
			handleDelete: jest.fn()
		};
		const item = {
			title: 'Example',
			count: 0
		};
		const wrapper = shallow(<Counter actions={actions} item={item} />);
		wrapper.find('button').at(2).simulate('click');
		expect(actions.handleDelete.mock.calls).toEqual([ [ item ] ]);
		expect(actions.handleSubstraction.mock.calls).toEqual([]);
		expect(actions.handleAddition.mock.calls).toEqual([]);
	});
});
