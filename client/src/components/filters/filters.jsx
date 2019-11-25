import React, { useState } from 'react';
import './filters.css';
import { FaSortDown } from 'react-icons/fa';

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
			<h6 onClick={toggleDisplay}>
				Filter your results <span className="icon">{display !== 'show' ? <FaSortDown /> : 'x'}</span>
			</h6>
			<div className={display}>
				<span className="row">
					<label htmlFor="less">Less than: </label>
					<input
						className="sm-input"
						type="number"
						name="less"
						value={value.lessQuery}
						onFocus={() => actions.cleanFilter('less', 'lessQuery')}
						onChange={(e) => actions.handleFilter(e.target.name, e.target.value)}
					/>
				</span>
				<span className="row">
					<label htmlFor="greater">Greater than: </label>
					<input
						className="sm-input"
						type="number"
						name="greater"
						value={value.greaterQuery}
						onFocus={() => actions.cleanFilter('greater', 'greaterQuery')}
						onChange={(e) => actions.handleFilter(e.target.name, e.target.value)}
					/>
				</span>
			</div>
		</div>
	);
};

export default Filters;
