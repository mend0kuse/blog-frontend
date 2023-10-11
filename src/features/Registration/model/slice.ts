import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RegisterSchema } from './types';

const initialState: RegisterSchema = {
	password: '',
	email: '',
	name: '',
};

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
	},
});

export const { reducer: registerReducer } = registerSlice;
export const { actions: registerActions } = registerSlice;
