import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, AsyncThunkConfig<string>>(
	'profile/getProfileData',
	async (_, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Profile>('/profile');

			if (!response.data) throw new Error();

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Profile Error');
		}
	},
);
