import { createSlice } from '@reduxjs/toolkit';

import { type ProfileSchema } from './../types/profile';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	data: undefined,
	error: undefined,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
