import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Profile } from 'enteties/Profile';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { profileActions } from '../../slice/profileSlice';
import { ValidateProfileError } from './../../types/editableProfile';
import { validateProfileData } from './../validateProfileData/validateProfileData';

export const changeProfileData = createAsyncThunk<Profile, void, AsyncThunkConfig<ValidateProfileError[]>>(
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

			const errors = validateProfileData(formData);

			if (errors.length > 0) {
				return rejectWithValue(errors);
			}

			const response: AxiosResponse = await api.put<Profile>('/profile', formData);

			if (!response.data) throw new Error();

			dispatch(profileActions.setReadonly(true));

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	},
);
