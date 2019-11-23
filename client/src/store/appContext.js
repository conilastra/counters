import React, { useState } from 'react';
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

		return (
			<Provider value={state}>
				<PassedComponent {...props} />
			</Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
