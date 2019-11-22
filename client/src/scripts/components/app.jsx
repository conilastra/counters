import React from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import Header from './header/header';

const App = () => {
	return (
		<Consumer>
			{({ store, actions }) => {
				const { counters } = store;
				const total = counters.map(c => c.count).reduce((acc, val) => acc + val);

				return (
				<>
				<Header total={total} actions={actions} />
				<CounterHolder items={counters} actions={actions} />
				</>)
			}}
		</Consumer>
	);
};

export default injectContext(App);
