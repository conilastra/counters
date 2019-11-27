import React from 'react';
import './messages.css';

const NoCounters = () => {
	return <h1 className="error">Create your first counter!</h1>;
};

const NoMatchingItems = ({ onGoBack }) => {
	return (
		<div className="error">
			<p>Sorry, there are no counters that match the specified conditions :(</p>
			<span className="link" onClick={onGoBack}>
				Go back
			</span>
		</div>
	);
};

export { NoCounters, NoMatchingItems };
