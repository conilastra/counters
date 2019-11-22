import React from 'react';

const Counter = ({ item, actions }) => {
	const { name, count } = item;
	return (
		<tr>
			<td>{name}</td>

			<td>
				<button onClick={(e) => actions.handleSubstraction(item)}>-</button>
			</td>
			<td>{count}</td>
			<td>
				<button onClick={(e) => actions.handleAddition(item)}>+</button>
			</td>

			<td>
				<button onClick={(e) => actions.handleDelete(item)}>Delete</button>
			</td>
		</tr>
	);
};

export default Counter;
