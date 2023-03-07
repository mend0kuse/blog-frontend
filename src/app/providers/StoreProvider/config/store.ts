import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';

import { useDispatch } from 'react-redux';

import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: _IS_DEV_,
		preloadedState: initialState,
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
}

const RootState = createReduxStore();
type AppDispatch = typeof RootState.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
