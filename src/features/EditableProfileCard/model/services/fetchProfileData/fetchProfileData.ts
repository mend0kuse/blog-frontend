import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Profile } from 'enteties/Profile';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, AsyncThunkConfig<string>>(
	'profile/getProfileData',
	async (id = '', thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Profile>('/profile/' + id);

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Profile Error');
		}
	},
);
