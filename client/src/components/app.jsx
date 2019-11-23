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
					const filtered = filter.number !== '' ? (filter.type === 'less' ? items.filter(i => i.count < filter.number) : items.filter(i => i.count > filter.number)) : items;
					sorted = sort.active ? _.orderBy(filtered, [sort.column], [sort.order]) : filtered;
				}
				
				return (
				<>
					<header>
						<Searchbox onSearch={actions.handleSearch}/>
						<TotalCount total={total ? total : 0} />
					</header>

					
					<main>
					{counters.length ? 
					<>
						<Filters actions={actions} />
						<CounterHolder items={sorted} actions={actions} sort={sort} />
					</>: <h1 className="text-center">You don't have any counters yet</h1>}
						<CounterGenerator onNewCounter={actions.handleNewCounter} /> 
					</main>	
					
				</>)
			}}
		</Consumer>
	);
};

export default injectContext(App);
