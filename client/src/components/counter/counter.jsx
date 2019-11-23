import React from 'react';
import './counter.css';

const Counter = ({ item, actions }) => {
	const { title, count } = item;
	return (
		<tr>
			<td>{title}</td>

			<td>
				<button className="counter-btn" onClick={(e) => actions.handleSubstraction(item)}>
					-
				</button>
			</td>
			<td className="text-center">{count}</td>
			<td>
				<button className="counter-btn" onClick={(e) => actions.handleAddition(item)}>
					+
				</button>
			</td>

			<td>
				<button className="delete-btn" onClick={(e) => actions.handleDelete(item)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Counter;
