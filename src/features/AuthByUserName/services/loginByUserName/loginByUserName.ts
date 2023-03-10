import axios, { type AxiosResponse } from 'axios';
import { type User, userActions } from 'enteties/User';
import { USER_KEY } from 'shared/const/localStorage';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUserNameProps {
	username: string;
	password: string;
}

export const loginByUserName = createAsyncThunk<
	User,
	LoginByUserNameProps,
	{ rejectValue: string }
>('login/LoginByUserName', async (authData, thunkAPI) => {
	try {
		const response: AxiosResponse = await axios.post(
			'http://localhost:8000/login',
			authData,
		);

		if (!response.data) {
			throw new Error();
		}

		thunkAPI.dispatch(userActions.setAuthData(response.data));
		localStorage.setItem(USER_KEY, JSON.stringify(response.data));

		return response.data;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue('Auth error');
	}
});
