import React from 'react';
import Counter from '../counter/counter';

const CounterTable = ({ items, actions }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th />
					<th>#</th>
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
