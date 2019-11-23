import React from 'react';

const Searchbox = ({ onSearch }) => {
	return <input name="query" placeholder="Search..." type="text" onChange={(e) => onSearch(e.target.value)} />;
};

export default Searchbox;
