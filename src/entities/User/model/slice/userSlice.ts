import { USER_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/features';
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
			setFeatureFlags(action.payload.features);
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_KEY);
			if (user) {
				const parsed = JSON.parse(user) as User;
				state.authData = parsed;
				setFeatureFlags(parsed.features);
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
