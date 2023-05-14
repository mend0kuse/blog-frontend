import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type ArticleSortFieldSchema, ArticleSortKey, type ArticleSortOrder } from '../types/articleSortFieldTypes';

const initialState: ArticleSortFieldSchema = {
	order: 'asc',
	sort: ArticleSortKey.CREATED,
	_inited: false,
};

export const articleSortFieldsSlice = createSlice({
	name: 'articleSortFields',
	initialState,
	reducers: {
		setSort(state: ArticleSortFieldSchema, action: PayloadAction<ArticleSortKey>) {
			state.sort = action.payload;
		},
		setOrder(state: ArticleSortFieldSchema, action: PayloadAction<ArticleSortOrder>) {
			state.order = action.payload;
		},
		init(state: ArticleSortFieldSchema) {
			const url = new URLSearchParams(window.location.search);
			const orderFromUrl = url.get('order');
			const sortFromUrl = url.get('sort');

			if (orderFromUrl) {
				state.order = orderFromUrl as ArticleSortOrder;
			}
			if (sortFromUrl) {
				state.sort = sortFromUrl as ArticleSortKey;
			}

			state._inited = true;
		},
	},
});

export const { reducer: articleSortFieldsReducer } = articleSortFieldsSlice;
export const { actions: articleSortFieldsActions } = articleSortFieldsSlice;
