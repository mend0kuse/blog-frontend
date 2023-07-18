import type { AxiosResponse } from 'axios';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { type User, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUserNameProps {
	username: string;
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
			const response: AxiosResponse<User> = await api.post('/login', authData);

			if (!response.data) throw new Error();

			dispatch(userActions.setAuthData(response.data));

			localStorage.setItem(USER_KEY, JSON.stringify(response.data.id));

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Auth error');
		}
	},
);
