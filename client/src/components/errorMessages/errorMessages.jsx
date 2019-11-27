import React from 'react';
import './errorMessages.css';

const NoCounters = () => {
	return <h1 className="intro-text">Create your first counter!</h1>;
};

const NoMatchingItems = ({ onGoBack }) => {
	return (
		<div className="error">
			<p>You don't have counters that match the specified conditions :(</p>
			<span className="link" onClick={onGoBack}>
				Go back
			</span>
		</div>
	);
};

export { NoCounters, NoMatchingItems };
