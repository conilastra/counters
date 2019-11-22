import React from 'react';
import './header.css';
import TotalCount from './totalCount/totalCount';
import CounterGenerator from './counterGenerator.jsx/counterGenerator';

const Header = ({ total, actions }) => {
	return (
		<header>
			<CounterGenerator onNewCounter={actions.handleNewCounter} />
			<TotalCount total={total} />
		</header>
	);
};

export default Header;
