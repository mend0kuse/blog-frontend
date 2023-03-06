import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUserName';

import { useDispatch } from 'react-redux';

import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		login: loginReducer,
		user: userReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: _IS_DEV_,
		preloadedState: initialState,
	});
}

const RootState = createReduxStore();
type AppDispatch = typeof RootState.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
