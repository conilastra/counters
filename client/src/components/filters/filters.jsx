import React, { useState } from 'react';
import './filters.css';
import { IoMdClose } from 'react-icons/io';
import { FaSlidersH } from 'react-icons/fa';

const Filters = ({ actions, value }) => {
	const [ display, setDisplay ] = useState('hide');

	const toggleDisplay = () => {
		if (display === 'hide') {
			setDisplay('show');
		} else {
			setDisplay('hide');
		}
	};

	return (
		<div className="filters">
			<div className="filters__header" onClick={toggleDisplay}>
				<h6>Filter your results</h6>
				<div className="icon">
					<FaSlidersH />
				</div>
			</div>
			<div className={display}>
				<span className="row">
					<label htmlFor="less">Less than: </label>
					<input
						className="sm-input"
						type="number"
						name="less"
						value={value.lessQuery}
						onChange={(e) => actions.handleFilter('less', 'lessQuery', e.target.value)}
					/>
				</span>
				<span className="row">
					<label htmlFor="greater">Greater than: </label>
					<input
						className="sm-input"
						type="number"
						name="greater"
						value={value.greaterQuery}
						onChange={(e) => actions.handleFilter('greater', 'greaterQuery', e.target.value)}
					/>
				</span>
			</div>
		</div>
	);
};

export default Filters;
