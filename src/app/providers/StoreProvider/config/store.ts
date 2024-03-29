import { useDispatch } from 'react-redux';

import { userReducer } from '@/entities/User';
import { savePageScrollReducer } from '@/features/SavePageScroll';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { type CombinedState, type Reducer, type ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
		pageScroll: savePageScrollReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}).concat(rtkApi.middleware),
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
}

type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
