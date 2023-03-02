import { counterReducer } from 'enteties/Counter';

import { configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer,
		},
		devTools: _IS_DEV_,
		preloadedState: initialState,
	});
}
