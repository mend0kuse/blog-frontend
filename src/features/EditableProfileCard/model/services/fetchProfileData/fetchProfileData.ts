import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Profile } from 'enteties/Profile';

import { createAsyncThunk } from '@reduxjs/toolkit';

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
