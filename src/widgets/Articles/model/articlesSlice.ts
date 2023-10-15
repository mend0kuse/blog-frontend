import { ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_KEY } from '@/shared/browser-storage/localStorage';
import { buildSlice } from '@/shared/store/buildSlice';
import { type PayloadAction } from '@reduxjs/toolkit';

import type { ArticleCategory, ArticleSortOrder, ArticlesSchema } from './articlesTypes';
import { ArticleSortKey } from './articlesTypes';

const initialState: ArticlesSchema = {
	view: ArticleView.TILE,
	limit: 3,
	chosenCategory: 'all',
	order: 'asc',
	sort: ArticleSortKey.CREATED,
	q: '',
	hasMore: false,
	page: 1,
	_inited: false,
};

export const articlesSlice = buildSlice({
	name: 'articles',
	initialState,
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
});

export const { reducer: articlesReducer, useActions: useArticleActions } = articlesSlice;
