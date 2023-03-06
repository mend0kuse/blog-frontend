import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUserName } from '../../services/loginByUserName/loginByUserName';
import { type LoginSchema } from '../types/loginShema';

const initialState: LoginSchema = {
	password: '',
	username: '',
	isLoading: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUserName.pending, (state, action) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(loginByUserName.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUserName.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
