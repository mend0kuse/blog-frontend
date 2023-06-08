import { type Profile } from 'enteties/Profile';

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type ProfileSchema, type ValidateProfileError } from '../types/editableProfile';

const initialState: ProfileSchema = {
	readonly: true,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly(state, action: PayloadAction<boolean>) {
			state.readonly = action.payload;
		},
		cancelEdit(state, action: PayloadAction<Profile>) {
			state.formData = action.payload;
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
		setFormData(state, action: PayloadAction<Profile>) {
			state.formData = action.payload;
		},
		setValidateErrors(state, action: PayloadAction<ValidateProfileError[]>) {
			state.validateError = action.payload;
		},
	},
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
