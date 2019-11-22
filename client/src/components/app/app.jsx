import React from 'react';
import './app.css';
import injectContext, { Consumer } from '../../store/appContext';
import CounterHolder from '../counterHolder/counterHolder';

const App = () => {
	return (
		<Consumer>
			{({ store, actions }) => {
				return <CounterHolder items={store.counters} actions={actions} />;
			}}
		</Consumer>
	);
};

export default injectContext(App);
