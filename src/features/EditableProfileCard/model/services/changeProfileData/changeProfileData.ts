import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Profile } from 'enteties/Profile';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { profileActions } from '../../slice/profileSlice';

export const changeProfileData = createAsyncThunk<Profile, void, AsyncThunkConfig<string>>(
	'profile/changeProfileData',
	async (_, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
			dispatch,
			getState,
		} = thunkAPI;

		try {
			const formData = getProfileFormData(getState());

			const response: AxiosResponse = await api.put<Profile>('/profile', formData);

			if (!response.data) throw new Error();

			dispatch(profileActions.setReadonly(true));

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Profile Error');
		}
	},
);
