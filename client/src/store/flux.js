import Axios from 'axios';
import _ from 'lodash';

const apiEndpoint = '/api/v1/counter';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counters: [],
			allCounters: [],
			sort: {
				column: '',
				order: 'desc',
				active: true
			},
			query: '',
			filter: {
				less: false,
				lessQuery: '',
				greater: false,
				greaterQuery: ''
			}
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

					const obj = { title };
					const { data: counter } = await Axios.post(apiEndpoint, obj);
					const counters = store.allCounters.length
						? [ ...store.allCounters, counter ]
						: [ ...store.counters, counter ];

					const filter = { lessQuery: '', greaterQuery: '' };
					const query = '';

					setStore({ counters, filter, query });
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
				let counters = store.allCounters.length ? [ ...store.allCounters ] : [ ...store.counters ];
				counters = counters.filter((c) => c !== item);
				setStore({ counters, allCounters: counters });

				const obj = { id: item.id };
				await Axios.delete(apiEndpoint, { data: obj });
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
				let allCounters = [ ...store.counters ];

				if (query.trim() !== '') {
					let counters = store.counters.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));
					setStore({ query, counters, allCounters });
				} else {
					setStore({ query: '', counters: store.allCounters });
				}
			},
			handleFilter: (type, queryType, number) => {
				const store = getStore();
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
					filter[queryType] = '';

					setStore({ filter, counters: store.allCounters });
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
				let filter = { ...store.filter };

				if (filter.less) {
					filter.less = false;
					filter.lessQuery = '';
				} else if (filter.greater) {
					filter.greater = false;
					filter.greaterQuery = '';
				}

				setStore({ query: '', filter, counters: store.allCounters });
			}
		}
	};
};

export default getState;
