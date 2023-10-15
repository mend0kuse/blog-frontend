import jwt from 'jwt-decode';

import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { User } from '@/entities/User';
import { getUserInit, useLazyGetUserByIdQuery, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/browser-storage/localStorage';
import { isTypeInstanse } from '@/shared/lib/ts/isTypeIstanse';

import { useAppDispatch } from './providers/StoreProvider';

export const useInitUser = () => {
	const [getUserById, { isFetching }] = useLazyGetUserByIdQuery();
	const dispatch = useAppDispatch();

	const fetchUser = useCallback(
		async (id: string) => {
			const response = await getUserById(id);

			dispatch(userActions.setAuthData(response.data));
		},
		[dispatch, getUserById],
	);

	useEffect(() => {
		const token = localStorage.getItem(USER_KEY);

		if (token) {
			const user = jwt(token.split(' ')[1]);

			if (isTypeInstanse<User>(user, 'id')) fetchUser(user.id);
		}

		dispatch(userActions.setInited());
	}, [dispatch, fetchUser, getUserById]);

	const _init = useSelector(getUserInit);

	return { _init, isFetching };
};
