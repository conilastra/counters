import React from 'react';
import './totalCount.css';

const TotalCount = ({ total }) => {
	return (
		<div>
			TOTAL: <div className="total">{total}</div>
		</div>
	);
};

export default TotalCount;
