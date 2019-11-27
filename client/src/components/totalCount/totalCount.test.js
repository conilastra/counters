import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalCount from './totalCount';

configure({ adapter: new Adapter() });

describe('TotalCount', () => {
	it('renders without crashing', () => {
		const total = 1;
		shallow(<TotalCount total={total} />);
	});
});
