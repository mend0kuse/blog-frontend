import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { type Article, ArticleView } from '@/entities/Article';

import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type ArticlesSchema } from '../types/articlesSchema';
import { ARTICLES_VIEW_KEY } from './../../../../shared/const/localStorage';
import { fetchArticles } from './../../services/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

const articlesSlice = createSlice({
	name: 'articles',
	initialState: articlesAdapter.getInitialState<ArticlesSchema>({
		isLoading: false,
		error: '',
		entities: {},
		ids: [],
		view: ArticleView.TILE,
		limit: 3,
		hasMore: false,
		page: 1,
		_inited: false,
	}),
	reducers: {
		setView(state: ArticlesSchema, action: PayloadAction<ArticleView>) {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
		},
		setPage(state: ArticlesSchema, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		init(state: ArticlesSchema) {
			state.view = (localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView) || ArticleView.TILE;
			state.limit = state.view === ArticleView.TILE ? 9 : 3;
			state._inited = true;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchArticles.pending, (state, action) => {
				state.isLoading = true;
				state.error = '';

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length >= state.limit;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articlesAdapter.getInitialState(),
);

export const { reducer: articlesReducer } = articlesSlice;
export const { actions: articlesActions } = articlesSlice;
