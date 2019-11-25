import React from 'react';
import Counter from '../counter/counter';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';
import './counterHolder.css';

const CounterTable = ({ items, actions, sort }) => {
	return (
		<table>
			<thead>
				<tr>
					<th className="clickable" onClick={() => actions.handleSort('title')}>
						Title
						{sort.column === 'title' && sort.active ? sort.order === 'asc' ? (
							<TiArrowSortedDown />
						) : (
							<TiArrowSortedUp />
						) : (
							<TiArrowUnsorted />
						)}
					</th>
					<th />
					<th className="clickable text-center" onClick={() => actions.handleSort('count')}>
						#
						{sort.column === 'count' && sort.active ? sort.order === 'asc' ? (
							<TiArrowSortedDown />
						) : (
							<TiArrowSortedUp />
						) : (
							<TiArrowUnsorted />
						)}
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
