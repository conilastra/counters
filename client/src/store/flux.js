import Axios from 'axios';

const apiEndpoint = '/api/v1/counter';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counters: [],
			sort: {
				column: '',
				order: '',
				active: false
			},
			query: '',
			filter: {
				type: '',
				number: ''
			}
		},
		actions: {
			getCounters: async () => {
				const response = await Axios.get(`${apiEndpoint}s`);
				setStore({ counters: response.data });
			},
			handleNewCounter: async (title) => {
				if (title.trim() !== '') {
					const store = getStore();

					const obj = { title };
					const { data: counter } = await Axios.post(apiEndpoint, obj);
					const counters = [ ...store.counters, counter ];

					setStore({ counters });
				}
			},
			handleAddition: async (item) => {
				const store = getStore();
				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				const obj = { id: item.id };
				const { data: counter } = await Axios.post(`${apiEndpoint}/inc`, obj);
				counters[index] = { ...counter };

				setStore({ counters });
			},
			handleSubstraction: async (item) => {
				const store = getStore();
				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);

				const obj = { id: item.id };
				const { data: counter } = await Axios.post(`${apiEndpoint}/dec`, obj);
				counters[index] = { ...counter };

				setStore({ counters });
			},
			handleDelete: async (item) => {
				const store = getStore();
				let counters = [ ...store.counters ];
				counters = counters.filter((c) => c !== item);
				setStore({ counters });

				const obj = { id: item.id };
				await Axios.delete(apiEndpoint, { data: obj });
			},
			handleSort: (selectedColumn) => {
				const store = getStore();
				let sort = { ...store.sort };

				if (sort.column === selectedColumn) {
					sort.order = sort.order === 'asc' ? 'desc' : 'asc';
					sort.active = true;
				} else {
					sort.column = selectedColumn;
					sort.order = 'asc';
					sort.active = false;
				}

				setStore({ sort });
			},
			handleSearch: (query) => {
				if (query.trim() !== '') {
					setStore({ query });
				} else {
					setStore({ query: '' });
				}
			},
			handleFilter: (type, amount) => {
				let number;
				if (amount !== '') {
					number = parseInt(amount);
				} else {
					number = '';
				}
				setStore({ filter: { type, number } });
			}
		}
	};
};

export default getState;
