import React from 'react';

const NoCounters = () => {
	return <h1 className="text-center">You don't have any counters yet</h1>;
};

const NoMatchingItems = ({ onGoBack }) => {
	return (
		<div className="error">
			<p>None of the counters match the specified conditions :(</p>
			<span className="link" onClick={onGoBack}>
				Go back
			</span>
		</div>
	);
};

export { NoCounters, NoMatchingItems };
