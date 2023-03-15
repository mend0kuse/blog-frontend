import { type Profile } from 'enteties/Profile';

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { changeProfileData } from '../services/changeProfileData/changeProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { type ProfileSchema } from '../types/editableProfile';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	data: undefined,
	error: undefined,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly(state, action: PayloadAction<boolean>) {
			state.readonly = action.payload;
		},
		cancelEdit(state) {
			state.formData = state.data;
			state.readonly = true;
			state.validateError = undefined;
		},
		setFirstName(state, action: PayloadAction<Profile['first']>) {
			state.formData = { ...state.formData, first: action.payload };
		},
		setLastName(state, action: PayloadAction<Profile['lastname']>) {
			state.formData = { ...state.formData, lastname: action.payload };
		},
		setAge(state, action: PayloadAction<Profile['age']>) {
			state.formData = { ...state.formData, age: action.payload };
		},
		setUsername(state, action: PayloadAction<Profile['username']>) {
			state.formData = { ...state.formData, username: action.payload };
		},
		setAvatar(state, action: PayloadAction<Profile['avatar']>) {
			state.formData = { ...state.formData, avatar: action.payload };
		},
		setCity(state, action: PayloadAction<Profile['city']>) {
			state.formData = { ...state.formData, city: action.payload };
		},
		setCurrency(state, action: PayloadAction<Profile['currency']>) {
			state.formData = { ...state.formData, currency: action.payload };
		},
		setCountry(state, action: PayloadAction<Profile['country']>) {
			state.formData = { ...state.formData, country: action.payload };
		},
	},
	extraReducers: (builder) => {
		builder
			/* get profile */
			.addCase(fetchProfileData.pending, (state) => {
				state.error = '';
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			/* change profile */
			.addCase(changeProfileData.pending, (state) => {
				state.validateError = undefined;
				state.isLoading = true;
			})
			.addCase(changeProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
				state.validateError = undefined;
				state.readonly = true;
			})
			.addCase(changeProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateError = action.payload;
			});
	},
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
