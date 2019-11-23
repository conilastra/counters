import React from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import TotalCount from './totalCount/totalCount';
import CounterGenerator from './counterGenerator/counterGenerator';
import _ from 'lodash';
import Searchbox from './searchbox/searchbox';
import Filters from './filters/filters';

const App = () => {
	return (
		<Consumer>
			{({ store, actions }) => {
				const { counters, sort, query, filter } = store;
				const total = counters.map(c => c.count).reduce((acc, val) => acc + val);
				const items = query !== '' ? counters.filter(c => c.name.toLowerCase().includes(query.toLowerCase())) : counters;
				const filtered = filter.number !== '' ? (filter.type === 'less' ? items.filter(i => i.count < filter.number) : items.filter(i => i.count > filter.number)) : items;
				const sorted = sort.active ? _.orderBy(filtered, [sort.column], [sort.order]) : filtered;
				

				return (
				<>
					<header>
						<Searchbox onSearch={actions.handleSearch}/>
						<TotalCount total={total} />
					</header>


					<main>
						<Filters actions={actions} />
						<CounterHolder items={sorted} actions={actions} sort={sort} />
						<CounterGenerator onNewCounter={actions.handleNewCounter} />
					</main>
					
					
					
					
					
				</>)
			}}
		</Consumer>
	);
};

export default injectContext(App);
