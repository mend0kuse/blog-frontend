import jwt from 'jwt-decode';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { User } from '@/entities/User';
import { getUserInit, useLazyGetUserByIdQuery, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/browser-storage/localStorage';
import { isTypeIstanse } from '@/shared/lib/ts/isTypeIstanse';

import { useAppDispatch } from './providers/StoreProvider';

export const useInitUser = () => {
	const [getUserById, { isFetching }] = useLazyGetUserByIdQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const token = localStorage.getItem(USER_KEY);

		if (token) {
			const user = jwt(token.split(' ')[1]);
			if (isTypeIstanse<User>(user, 'id')) getUserById(user.id);
		}

		dispatch(userActions.setInited());
	}, [dispatch, getUserById]);

	const _init = useSelector(getUserInit);

	return { _init, isFetching };
};
