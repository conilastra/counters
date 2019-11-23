import React from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import Header from './header/header';
import _ from 'lodash';
import Searchbox from './searchbox/searchbox';

const App = () => {
	return (
		<Consumer>
			{({ store, actions }) => {
				const { counters, sort, query } = store;
				const total = counters.map(c => c.count).reduce((acc, val) => acc + val);
				const items = query !== '' ? counters.filter(c => c.name.toLowerCase().includes(query.toLowerCase())) : counters;
				const sorted = sort.active ? _.orderBy(items, [sort.column], [sort.order]) : items;
				


				return (
				<>
				<Header total={total} actions={actions} />
				<Searchbox onSearch={actions.handleSearch}/>
				<CounterHolder items={sorted} actions={actions} sort={sort} />
				</>)
			}}
		</Consumer>
	);
};

export default injectContext(App);
