import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	getArticleSort,
	getArticleSortOrder,
	getArticlesLimit,
	getArticlesPage,
	getArticlesSearchQ,
	getChosenCategory,
} from '../model/articleSelectors';

interface Props {
	replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], Props, AsyncThunkConfig<string>>(
	'articles/fetchArticles',
	async ({ replace }, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
			getState,
		} = thunkAPI;

		try {
			const state = getState();

			const limit = getArticlesLimit(state);
			const page = getArticlesPage(state);
			const sort = getArticleSort(state);
			const order = getArticleSortOrder(state);
			const search = getArticlesSearchQ(state);
			const category = getChosenCategory(state);

			const response: AxiosResponse = await api.get<Article[]>('/articles', {
				params: {
					page,
					limit,
					sort,
					order,
					...(category !== 'all' && { category }),
					q: search,
				},
			});

			if (!response.data) throw new Error();

			return response.data;
		} catch (error) {
			if (isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}

			return rejectWithValue('Article Fetch Error');
		}
	},
);
