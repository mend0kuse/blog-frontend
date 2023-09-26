import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInit, useLazyGetUserByIdQuery, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/browser-storage/localStorage';

import { useAppDispatch } from './providers/StoreProvider';

export const useInitUser = () => {
	const [getUserById, { isFetching }] = useLazyGetUserByIdQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const id = localStorage.getItem(USER_KEY);

		if (id) {
			getUserById(JSON.parse(id));
		}

		dispatch(userActions.setInited());
	}, [dispatch, getUserById]);

	const _init = useSelector(getUserInit);

	return { _init, isFetching };
};
