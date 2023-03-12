import { type ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};

export const useDinamycModuleLoader = (reducers: ReducersList, removeAfterAnmount = true) => {
	const dispatch = useDispatch();
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([key, reducer]) => {
			store.reducerManager.add(key as StateSchemaKey, reducer);
			dispatch({ type: `@init ${key}` });
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
