const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counters: [ { name: 'Dogs', count: 0 }, { name: 'Cats', count: 0 }, { name: 'Owls', count: 0 } ],
			sort: {
				column: '',
				order: '',
				active: false
			},
			query: ''
		},
		actions: {
			handleNewCounter: (name) => {
				const store = getStore();
				const newCounter = {
					name,
					count: 0
				};
				const counters = [ ...store.counters, newCounter ];
				setStore({ counters });
			},
			handleAddition: (item) => {
				const store = getStore();
				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);
				counters[index] = { ...item };
				counters[index].count += 1;

				setStore({ counters });
			},
			handleSubstraction: (item) => {
				const store = getStore();
				const counters = [ ...store.counters ];
				const index = counters.indexOf(item);
				counters[index] = { ...item };
				counters[index].count -= 1;

				setStore({ counters });
			},
			handleDelete: (item) => {
				const store = getStore();
				let counters = [ ...store.counters ];
				counters = counters.filter((c) => c !== item);
				console.log(counters);
				setStore({ counters });
			},
			/* handleSelectedColumn = item => {
				const store = getStore();
				store.sort.column = item;
				
				setStore({ sort })
				console.log(store.sort);
			}, */
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
				setStore({ query });
			}
		}
	};
};

export default getState;
