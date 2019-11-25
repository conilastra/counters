import React from 'react';
import './searchbox.css';
import { IoIosSearch } from 'react-icons/io';

const Searchbox = ({ onSearch, value }) => {
	return (
		<div className="searchbox">
			<input
				name="query"
				placeholder="Search..."
				type="text"
				value={value}
				onChange={(e) => onSearch(e.target.value)}
			/>
			<span className="searchbox__icon">
				<IoIosSearch />
			</span>
		</div>
	);
};

export default Searchbox;
