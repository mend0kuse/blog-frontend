import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type ArticleSchema } from '../types/ArticleSchema';
import { fetchArticleDetails } from './../../services/fetchArticleDetails';
import { type Article } from './../types/ArticleTypes';

const initialState: ArticleSchema = {};

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchArticleDetails.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchArticleDetails.fulfilled, (state, action: PayloadAction<Article>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticleDetails.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleReducer } = articleSlice;
export const { actions: articleActions } = articleSlice;
