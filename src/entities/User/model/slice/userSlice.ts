import { USER_KEY } from 'shared/const/localStorage';

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type User, type UserSchema } from './../types/user';

const initialState: UserSchema = {
	_init: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<User>) {
			state.authData = action.payload;
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_KEY);
			if (user) {
				state.authData = JSON.parse(user);
			}
			state._init = true;
		},
		logout(state) {
			state.authData = undefined;
			localStorage.removeItem(USER_KEY);
		},
	},
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
