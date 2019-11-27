import React from 'react';

const NoCounters = () => {
	return <h1 className="intro-text">Create your first counter!</h1>;
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
