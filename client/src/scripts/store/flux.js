const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counters: [ { name: 'Dogs', count: 0 }, { name: 'Cats', count: 0 }, { name: 'Owls', count: 0 } ]
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
			}
		}
	};
};

export default getState;
