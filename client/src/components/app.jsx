import React from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import Header from './header/header';
import _ from 'lodash';

const App = () => {
	return (
		<Consumer>
			{({ store, actions }) => {
				const { counters, sort } = store;
				const total = counters.map(c => c.count).reduce((acc, val) => acc + val);
				const sorted = sort.active ? _.orderBy(counters, [sort.column], [sort.order]) : counters;
				


				return (
				<>
				<Header total={total} actions={actions} />
				<CounterHolder items={sorted} actions={actions} sort={sort} />
				</>)
			}}
		</Consumer>
	);
};

export default injectContext(App);
