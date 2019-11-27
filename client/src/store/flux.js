import Axios from 'axios';
import _ from 'lodash';

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
				const response = await Axios.get(`${apiEndpoint}s`);
				const counters = response.data;
				setStore({ counters });
			},
			handleNewCounter: async (title) => {
				if (title.trim() !== '') {
					const store = getStore();
					const actions = getActions();
					await actions.getCounters();

					const obj = { title };
					const { data: counter } = await Axios.post(apiEndpoint, obj);
					const counters = [ ...store.counters, counter ];

					const filter = { lessQuery: '', greaterQuery: '' };
					const query = '';

					const item = {};
					item.name = counter.name;
					item.type = 'add';

					setStore({ counters, filter, query, item });
				}
			},
			handleAddition: async (item) => {
				const store = getStore();
				const sort = store.sort;
				sort.active = false;
				await setStore({ sort });

				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				const obj = { id: item.id };
				const { data: counter } = await Axios.post(`${apiEndpoint}/inc`, obj);
				counters[index] = { ...counter };

				setStore({ counters });
			},
			handleSubstraction: async (item) => {
				const store = getStore();
				const sort = store.sort;
				sort.active = false;
				await setStore({ sort });

				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				const obj = { id: item.id };
				const { data: counter } = await Axios.post(`${apiEndpoint}/dec`, obj);
				counters[index] = { ...counter };

				setStore({ counters });
			},
			handleDelete: async (item) => {
				const store = getStore();
				const actions = getActions();

				let counters = [ ...store.counters ];
				counters = counters.filter((c) => c !== item);
				if (counters.length) {
					setStore({ counters });
				} else {
					actions.cleanSearch();
				}

				const obj = { id: item.id };
				await Axios.delete(apiEndpoint, { data: obj });

				const deletedItem = {};
				deletedItem.name = item.name;
				deletedItem.type = 'delete';
				setStore({ item: deletedItem });
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
				let allCounters = [ ...store.counters ];

				if (query.trim() !== '') {
					let counters = store.counters.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));
					setStore({ query, counters, allCounters });
				} else {
					actions.getCounters();
					setStore({ query: '' });
				}
			},
			handleFilter: (type, queryType, number) => {
				const store = getStore();
				const actions = getActions();
				let allCounters = [ ...store.counters ];

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

					setStore({ filter, counters, allCounters });
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
