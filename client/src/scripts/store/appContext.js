import React, { useState, useEffect } from 'react';
import getState from './flux.js';

export const { Consumer, Provider } = React.createContext(null);

const injectContext = (PassedComponent) => {
	const StoreWrapper = (props) => {
		const [ state, setState ] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here
			 *
			 * state.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
		}, []);

		return (
			<Provider value={state}>
				<PassedComponent {...props} />
			</Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
