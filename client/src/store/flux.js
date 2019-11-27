import Axios from 'axios';
import _ from 'lodash';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const notifications = store;

const apiEndpoint = '/api/v1/counter';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counters: [],
			filter: {
				less: false,
				lessQuery: '',
				greater: false,
				greaterQuery: ''
			},
			item: {
				name: '',
				type: ''
			},
			sort: {
				column: '',
				order: 'desc',
				active: true
			},
			query: ''
		},
		actions: {
			getCounters: async () => {
				try {
					const response = await Axios.get(`${apiEndpoint}s`);
					const counters = response.data;
					setStore({ counters });
				} catch (error) {
					notifications.addNotification({
						title: `We can't handle your information right now :(`,
						message: `Please try again later`,
						type: 'danger',
						container: 'top-center',
						animationIn: [ 'animated', 'fadeIn' ],
						animationOut: [ 'animated', 'fadeOut' ],
						dismiss: {
							duration: 3000
						}
					});
				}
			},
			handleNewCounter: async (title) => {
				if (title.trim() !== '') {
					const store = getStore();
					const actions = getActions();

					try {
						await actions.getCounters();
						const obj = { title };
						const { data: counter } = await Axios.post(apiEndpoint, obj);
						const counters = [ ...store.counters, counter ];

						const filter = { lessQuery: '', greaterQuery: '' };
						const query = '';

						notifications.addNotification({
							title: '',
							message: `${counter.title} was successfully added`,
							type: 'success',
							container: 'top-center',
							animationIn: [ 'animated', 'fadeIn' ],
							animationOut: [ 'animated', 'fadeOut' ],
							dismiss: {
								duration: 3000
							}
						});

						setStore({ counters, filter, query });
					} catch (error) {
						notifications.addNotification({
							title: `${title} was not added`,
							message: `Sorry, your changes couldn't be saved`,
							type: 'danger',
							container: 'top-center',
							animationIn: [ 'animated', 'fadeIn' ],
							animationOut: [ 'animated', 'fadeOut' ]
						});
					}
				}
			},
			handleAddition: async (item) => {
				const store = getStore();
				const sort = store.sort;
				sort.active = false;
				await setStore({ sort });

				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				try {
					const obj = { id: item.id };
					const { data: counter } = await Axios.post(`${apiEndpoint}/inc`, obj);
					counters[index] = { ...counter };

					setStore({ counters });
				} catch (error) {
					notifications.addNotification({
						title: `Something went wrong`,
						message: `Sorry, your changes couldn't be saved`,
						type: 'danger',
						container: 'top-center',
						animationIn: [ 'animated', 'fadeIn' ],
						animationOut: [ 'animated', 'fadeOut' ]
					});
				}
			},
			handleSubstraction: async (item) => {
				const store = getStore();
				const sort = store.sort;
				sort.active = false;
				await setStore({ sort });

				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				try {
					const obj = { id: item.id };
					const { data: counter } = await Axios.post(`${apiEndpoint}/dec`, obj);
					counters[index] = { ...counter };

					setStore({ counters });
				} catch (error) {
					notifications.addNotification({
						title: `Something went wrong`,
						message: `Sorry, your changes couldn't be saved`,
						type: 'danger',
						container: 'top-center',
						animationIn: [ 'animated', 'fadeIn' ],
						animationOut: [ 'animated', 'fadeOut' ]
					});
				}
			},
			handleDelete: async (item) => {
				const store = getStore();
				const actions = getActions();

				let allCounters = [ ...store.counters ];
				let counters = allCounters.filter((c) => c !== item);
				if (counters.length) {
					setStore({ counters });
				} else {
					actions.cleanSearch();
				}

				try {
					const obj = { id: item.id };
					await Axios.delete(apiEndpoint, { data: obj });

					notifications.addNotification({
						title: '',
						message: `${item.title} was successfully deleted`,
						type: 'success',
						container: 'top-center',
						animationIn: [ 'animated', 'fadeIn' ],
						animationOut: [ 'animated', 'fadeOut' ],
						dismiss: {
							duration: 3000
						}
					});
				} catch (error) {
					notifications.addNotification({
						title: `${item.title} was not deleted`,
						message: `Sorry, your changes couldn't be saved`,
						type: 'danger',
						container: 'top-center',
						animationIn: [ 'animated', 'fadeIn' ],
						animationOut: [ 'animated', 'fadeOut' ]
					});
					setStore({ counters: allCounters });
				}
			},
			handleSort: (selectedColumn) => {
				const store = getStore();
				let sort = { ...store.sort };
				let sortedCounters = [ ...store.counters ];

				if (sort.column === selectedColumn) {
					sort.order = sort.order === 'asc' ? 'desc' : 'asc';
					sort.active = true;
				} else {
					sort.column = selectedColumn;
					sort.order = 'asc';
					sort.active = true;
				}

				sortedCounters = sort.active
					? _.orderBy(sortedCounters, [ sort.column ], [ sort.order ])
					: sortedCounters;

				setStore({ sort, counters: sortedCounters });
			},
			handleSearch: (query) => {
				const store = getStore();
				const actions = getActions();

				if (query.trim() !== '') {
					let counters = store.counters.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));
					setStore({ query, counters });
				} else {
					actions.getCounters();
					setStore({ query: '' });
				}
			},
			handleFilter: (type, queryType, number) => {
				const store = getStore();
				const actions = getActions();

				const filter = { ...store.filter };
				let query = parseInt(number);
				query = Number.isNaN(query) ? '' : query;

				if (query !== '') {
					filter[type] = true;
					filter[queryType] = query;
					let counters = [ ...store.counters ];

					if (type === 'less') {
						counters = counters.filter((i) => i.count < filter.lessQuery);
					} else {
						counters = counters.filter((i) => i.count > filter.greaterQuery);
					}

					setStore({ filter, counters });
				} else {
					filter[type] = false;
					filter.lessQuery = '';
					filter.greaterQuery = '';

					actions.getCounters();
					setStore({ filter });
				}
			},
			cleanFilter: (type, queryType) => {
				const store = getStore();
				let filter = { ...store.filter };
				filter[type] = false;
				filter[queryType] = '';
				setStore({ filter });
			},
			cleanSearch: () => {
				const store = getStore();
				const actions = getActions();

				let filter = { ...store.filter };
				filter.less = false;
				filter.lessQuery = '';
				filter.greater = false;
				filter.greaterQuery = '';

				actions.getCounters();
				setStore({ query: '', filter });
			}
		}
	};
};

export default getState;
