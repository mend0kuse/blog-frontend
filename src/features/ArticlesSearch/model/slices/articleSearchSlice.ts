import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type ArticlesSearchSchema } from '../types/articleSearch';

const initialState: ArticlesSearchSchema = {
	q: '',
	_inited: false,
};

export const articlesSearchSlice = createSlice({
	name: 'articlesSearch',
	initialState,
	reducers: {
		setSearch(state: ArticlesSearchSchema, action: PayloadAction<string>) {
			state.q = action.payload;
		},
		init(state) {
			const url = new URLSearchParams(window.location.search);
			const qFromUrl = url.get('search');
			if (qFromUrl) {
				state.q = qFromUrl;
			}
			state._inited = true;
		},
	},
});

export const { reducer: articlesSearchReducer } = articlesSearchSlice;
export const { actions: articlesSearchActions } = articlesSearchSlice;
