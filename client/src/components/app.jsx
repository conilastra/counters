import React, {useEffect} from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import TotalCount from './totalCount/totalCount';
import CounterGenerator from './counterGenerator/counterGenerator';
import _ from 'lodash';
import Searchbox from './searchbox/searchbox';
import Filters from './filters/filters';

const App = () => {
	let localActions = null;

	useEffect(() => {
		if (localActions !== null) {
			localActions.getCounters();
		}
	}, []);



	return (
		<Consumer>
			{({ store, actions }) => {
				const { counters, sort, query, filter } = store;
				localActions = actions;
				let total = '';
				let sorted = '';
				
				if (counters.length){
					total = counters.map(c => c.count).reduce((acc, val) => acc + val);
					const items = query !== '' ? counters.filter(c => c.title.toLowerCase().includes(query.toLowerCase())) : counters;
					const filteredByLess = filter.less ? (filter.greater ? items.filter(i => (i.count < filter.lessQuery && i.count > filter.greaterQuery)) : items.filter(i => i.count < filter.lessQuery)) : items;
					const filteredByGreater = filter.greater ? filteredByLess.filter(i => i.count > filter.greaterQuery) : filteredByLess;
					sorted = sort.active ? _.orderBy(filteredByGreater, [sort.column], [sort.order]) : filteredByGreater;
				}
				
				return (
					<>
					<header>
						<Searchbox onSearch={actions.handleSearch} value={store.query} />
						<TotalCount total={total ? total : 0} />
					</header>

					{counters.length ? 
					<>
					<Filters actions={actions} value={store.filter} />
					<main>
						{sorted.length ? 
						<CounterHolder items={sorted} actions={actions} sort={sort} /> :
						<div className="error">None of the counters match the specified conditions :( <span className="link" onClick={() => actions.cleanSearch()}>Go back</span> </div>}
						<CounterGenerator onNewCounter={actions.handleNewCounter} /> 
					</main>
					</>
					: 
					<main id="full-screen">
						<h1 className="text-center">You don't have any counters yet</h1>
						<CounterGenerator onNewCounter={actions.handleNewCounter} /> 
					</main>
					}
					
					</>)
					}}
		</Consumer>
	);
};

export default injectContext(App);
