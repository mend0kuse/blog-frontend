import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from 'enteties/Article';
import { fetchArticleRecomendations } from 'pages/articleDetails/services/fetchArticleRecomendations';

import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type ArticleDetailsRecomendationsSchema } from '../types/articleDetails';

const recomenadationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

const articleDetailsRecomendationsSlice = createSlice({
	name: 'comment',
	initialState: recomenadationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
		isLoading: false,
		error: '',
		entities: {},
		ids: [],
	}),
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchArticleRecomendations.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchArticleRecomendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				recomenadationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecomendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const getArticleDetailsRecomendations = recomenadationsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsPage?.recomendations || recomenadationsAdapter.getInitialState(),
);

export const { reducer: articleDetailsRecomendationsReducer } = articleDetailsRecomendationsSlice;
