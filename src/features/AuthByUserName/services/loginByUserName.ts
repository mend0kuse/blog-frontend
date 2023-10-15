import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';
import jwt from 'jwt-decode';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { type User, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/browser-storage/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUserNameProps {
	email: string;
	password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, AsyncThunkConfig<string>>(
	'login/LoginByUserName',
	async (authData, thunkAPI) => {
		const {
			extra: { api },
			dispatch,
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.post('/auth/signin', authData);

			if (!response.data) throw new Error();

			dispatch(userActions.setAuthData(jwt(response.data.access_token)));

			localStorage.setItem(USER_KEY, `Bearer ${response.data.access_token}`);

			return response.data;
		} catch (error) {
			if (isAxiosError(error)) return rejectWithValue(error.response?.data.message);
			return rejectWithValue('Uncaught error');
		}
	},
);
