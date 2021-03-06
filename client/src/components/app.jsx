import React, { useEffect } from 'react';
import './app.css';
import injectContext, { Consumer } from '../store/appContext';
import CounterHolder from './counterHolder/counterHolder';
import TotalCount from './totalCount/totalCount';
import CounterGenerator from './counterGenerator/counterGenerator';
import Searchbox from './searchbox/searchbox';
import Filters from './filters/filters';
import { NoCounters, NoMatchingItems } from './messages/messages';
import ReactNotifications from 'react-notifications-component';

const App = () => {
	let localActions = null;

	useEffect(() => {
		if (localActions !== null) {
			localActions.getCounters();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Consumer>
			{({ store, actions }) => {
				let { counters, sort, query, filter } = store;
				localActions = actions;
				let total = '';

				if (counters.length) {
					total = counters.map((c) => c.count).reduce((acc, val) => acc + val);
				}

				return (
					<>
						<ReactNotifications />
						<header className="header">
							<Searchbox onSearch={actions.handleSearch} value={store.query} />
							<TotalCount total={total ? total : 0} />
						</header>

						<Filters actions={actions} value={store.filter} />
						<main className="main">
							{counters.length ? (
								<CounterHolder items={counters} actions={actions} sort={sort} />
							) : query || filter.less || filter.greater ? (
								<NoMatchingItems onGoBack={() => actions.cleanSearch()} />
							) : (
								<NoCounters />
							)}
							<CounterGenerator onNewCounter={actions.handleNewCounter} />
						</main>
					</>
				);
			}}
		</Consumer>
	);
};

export default injectContext(App);
