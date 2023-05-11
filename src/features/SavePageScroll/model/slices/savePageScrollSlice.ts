import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type SavePageScrollSchema } from '../types/savePageScroll';

const initialState: SavePageScrollSchema = {};

export const savePageScrollSlice = createSlice({
	name: 'savePageScroll',
	initialState,
	reducers: {
		setPageScroll(state: SavePageScrollSchema, { payload }: PayloadAction<{ path: string; scroll: number }>) {
			state[payload.path] = payload.scroll;
		},
	},
});

export const { reducer: savePageScrollReducer } = savePageScrollSlice;
export const { actions: savePageScrollActions } = savePageScrollSlice;
