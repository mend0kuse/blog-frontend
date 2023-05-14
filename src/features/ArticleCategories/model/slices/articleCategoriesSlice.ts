import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type ArticleCategoriesSchema, type ArticleCategory } from '../types/articleCategories';

const initialState: ArticleCategoriesSchema = {
	chosenCategory: 'all',
	_inited: false,
};

export const articleCategoriesSlice = createSlice({
	name: 'articleCategories',
	initialState,
	reducers: {
		setChosenCategory(state: ArticleCategoriesSchema, action: PayloadAction<ArticleCategory>) {
			state.chosenCategory = action.payload;
		},
		init(state: ArticleCategoriesSchema) {
			const url = new URLSearchParams(window.location.search);
			const categoryFromUrl = url.get('category');

			if (categoryFromUrl) {
				state.chosenCategory = categoryFromUrl as ArticleCategory;
			}

			state._inited = true;
		},
	},
});

export const { reducer: articleCategoriesReducer } = articleCategoriesSlice;
export const { actions: articleCategoriesActions } = articleCategoriesSlice;
