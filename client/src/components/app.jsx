import React, {useEffect} from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import TotalCount from './totalCount/totalCount';
import CounterGenerator from './counterGenerator/counterGenerator';
import _ from 'lodash';
import Searchbox from './searchbox/searchbox';
import Filters from './filters/filters';
import { NoCounters, NoMatchingItems } from './errorMessages/errorMessages';

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
				let { counters, sort, query, filter, allCounters } = store;
				localActions = actions;
				let total = '';
				
				if (counters.length){
					total = counters.map(c => c.count).reduce((acc, val) => acc + val);
					allCounters = allCounters.length ? allCounters : counters;
				}
				
				return (
					<>
						{allCounters.length ?
						<header>
							<Searchbox onSearch={actions.handleSearch} value={store.query} />
							<TotalCount total={total ? total : 0} />
						</header> :
						''}

						{allCounters.length ? 
						<>
						<Filters actions={actions} value={store.filter} />
						<main>
							{counters.length && (!query || !filter.greater || !filter.less) ? 
							<CounterHolder items={counters} actions={actions} sort={sort} /> :
							<NoMatchingItems onGoBack={() => actions.cleanSearch()} />}
							<CounterGenerator onNewCounter={actions.handleNewCounter} /> 
						</main>
						</>
						: 
						<main id="full-screen">
							<NoCounters/>
							<CounterGenerator onNewCounter={actions.handleNewCounter} /> 
						</main>
						}
					
					</>)
					}}
		</Consumer>
	);
};

export default injectContext(App);
