import React from 'react';
import Counter from '../counter/counter';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import './counterHolder.css';

const CounterTable = ({ items, actions, sort }) => {
	return (
		<table>
			<thead>
				<tr>
					<th onClick={() => actions.handleSort('name')}>
						Name {sort.column === 'name' ? sort.order === 'asc' ? <FaSortDown /> : <FaSortUp /> : ''}
					</th>
					<th />
					<th className="text-center" onClick={() => actions.handleSort('count')}>
						# {sort.column === 'count' ? sort.order === 'asc' ? <FaSortDown /> : <FaSortUp /> : ''}
					</th>
					<th />
					<th />
				</tr>
			</thead>
			<tbody>
				{items.map((item) => {
					return <Counter item={item} key={item.name} actions={actions} />;
				})}
			</tbody>
		</table>
	);
};

export default CounterTable;
