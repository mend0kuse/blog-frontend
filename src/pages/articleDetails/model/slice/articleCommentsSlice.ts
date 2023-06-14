import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { type Comment } from '@/entities/Comment';

import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from './../../services/fetchArticleComments';
import { type ArticleDetailsCommentsSchema } from './../types/articleDetails';

const commentAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsComments',
	initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: '',
		entities: {},
		ids: [],
	}),
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
				state.isLoading = false;
				commentAdapter.setAll(state, action.payload);
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsPage?.comments || commentAdapter.getInitialState(),
);

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
