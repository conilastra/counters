import React, { useState } from 'react';
import './counterGenerator.css';

const CounterGenerator = ({ onNewCounter }) => {
	const [ name, setName ] = useState('');

	const handleInput = (e) => {
		const value = e.target.value;
		setName(value);
	};

	return (
		<form
			className="counter-generator"
			onSubmit={(e) => {
				e.preventDefault();
				setName('');
				onNewCounter(name);
			}}
		>
			<input
				name="name"
				value={name}
				placeholder="Add a new counter"
				type="text"
				onChange={(e) => handleInput(e)}
			/>
		</form>
	);
};

export default CounterGenerator;
