import React, { useState } from 'react';
import './counterGenerator.css';

const CounterGenerator = ({ onNewCounter }) => {
	const [ title, setTitle ] = useState('');

	const handleInput = (e) => {
		const value = e.target.value;
		setTitle(value);
	};

	return (
		<form
			className="counter-generator"
			onSubmit={(e) => {
				e.preventDefault();
				setTitle('');
				onNewCounter(title);
			}}
		>
			<input
				name="title"
				value={title}
				placeholder="Add a new counter"
				type="text"
				onChange={(e) => handleInput(e)}
			/>
		</form>
	);
};

export default CounterGenerator;
