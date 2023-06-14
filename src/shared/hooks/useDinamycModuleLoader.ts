import { type ReduxStoreWithManager, type StateSchema, type StateSchemaKey } from '@/app/providers/StoreProvider';

import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export const useDinamycModuleLoader = (reducers: ReducersList, removeAfterAnmount = true) => {
	const dispatch = useDispatch();
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		const mounted = store.reducerManager.getReducerMap();
		Object.entries(reducers).forEach(([key, reducer]) => {
			if (!mounted[key as StateSchemaKey]) {
				store.reducerManager.add(key as StateSchemaKey, reducer);
				dispatch({ type: `@init ${key}` });
			}
		});

		return () => {
			if (removeAfterAnmount) {
				Object.entries(reducers).forEach(([key]) => {
					store.reducerManager.remove(key as StateSchemaKey);
					dispatch({ type: `@destroy ${key}` });
				});
			}
		};
	}, [dispatch, store.reducerManager, removeAfterAnmount, reducers]);
};
