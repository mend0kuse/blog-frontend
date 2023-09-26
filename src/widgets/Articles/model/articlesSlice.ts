import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Article } from '@/entities/Article';
import { ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_KEY } from '@/shared/browser-storage/localStorage';
import { buildSlice } from '@/shared/store/buildSlice';
import { type PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchArticles } from '../services/fetchArticles';
import type { ArticleCategory, ArticleSortOrder, ArticlesSchema } from './articlesTypes';
import { ArticleSortKey } from './articlesTypes';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articlesAdapter.getInitialState(),
);

export const articlesSlice = buildSlice({
	name: 'articles',
	initialState: articlesAdapter.getInitialState<ArticlesSchema>({
		isLoading: false,
		error: '',
		entities: {},
		ids: [],
		view: ArticleView.TILE,
		limit: 3,
		chosenCategory: 'all',
		order: 'asc',
		sort: ArticleSortKey.CREATED,
		q: '',
		hasMore: false,
		page: 1,
		_inited: false,
	}),
	reducers: {
		setChosenCategory(state, action: PayloadAction<ArticleCategory>) {
			console.log(action.payload);
			state.chosenCategory = action.payload;
		},
		setSort(state, action: PayloadAction<ArticleSortKey>) {
			state.sort = action.payload;
		},
		setOrder(state, action: PayloadAction<ArticleSortOrder>) {
			state.order = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.q = action.payload;
		},
		setView(state, action: PayloadAction<ArticleView>) {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		init(state) {
			state.view = (localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView) || ArticleView.TILE;
			state.limit = state.view === ArticleView.TILE ? 9 : 3;

			const url = new URLSearchParams(window.location.search);
			const categoryFromUrl = url.get('category');
			const orderFromUrl = url.get('order');
			const sortFromUrl = url.get('sort');
			const qFromUrl = url.get('search');

			if (qFromUrl) {
				state.q = qFromUrl;
			}

			if (categoryFromUrl) {
				state.chosenCategory = categoryFromUrl as ArticleCategory;
			}

			if (orderFromUrl) {
				state.order = orderFromUrl as ArticleSortOrder;
			}

			if (sortFromUrl) {
				state.sort = sortFromUrl as ArticleSortKey;
			}

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

export const { reducer: articlesReducer, useActions: useArticleActions } = articlesSlice;
