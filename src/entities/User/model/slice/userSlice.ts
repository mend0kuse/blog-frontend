import { USER_KEY } from '@/shared/browser-storage/localStorage';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { userApi } from '../../api/userApi';
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
		setInited(state) {
			state._init = true;
		},
		logout(state) {
			state.authData = undefined;
			localStorage.removeItem(USER_KEY);
		},
	},
	extraReducers(builder) {
		builder.addMatcher(userApi.endpoints.getUserById.matchFulfilled, (state, { payload }) => {
			state.authData = payload;
		});
	},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
