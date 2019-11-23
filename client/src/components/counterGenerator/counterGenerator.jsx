import React, { useState } from 'react';
import './counterGenerator.css';

const CounterGenerator = ({ onNewCounter }) => {
	const [ title, setTitle ] = useState('');
	const [ display, setDisplay ] = useState('hidden');

	const handleInput = (e) => {
		const value = e.target.value;
		setTitle(value);
	};

	return (
		<form
			autocomplete="off"
			className="counter-generator"
			onSubmit={(e) => {
				e.preventDefault();
				setTitle('');
				onNewCounter(title);
			}}
		>
			<button
				className="counter-generator__btn"
				onClick={() => (display === '' ? setDisplay('hidden') : setDisplay(''))}
			>
				Add a counter
			</button>
			<input
				name="title"
				value={title}
				placeholder="Give it a name and press enter"
				type="text"
				className={display}
				onChange={(e) => handleInput(e)}
			/>
		</form>
	);
};

export default CounterGenerator;
