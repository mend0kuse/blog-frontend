import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';

import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: _IS_DEV_,
		preloadedState: initialState,
	});
}
