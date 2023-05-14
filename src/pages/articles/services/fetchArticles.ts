import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Article } from 'enteties/Article';
import { getArticleSort, getArticleSortOrder } from 'features/ArticleSortFields';
import { getArticlesSearchQ } from 'features/ArticlesSearch';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesLimit } from '../model/selectors/articlesSelectors';
import { getChosenCategory } from './../../../features/ArticleCategories/model/selectors/articleCategoriesSelectors';
import { getArticlesPage } from './../model/selectors/articlesSelectors';

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
			const limit = getArticlesLimit(getState());
			const page = getArticlesPage(getState());
			const sort = getArticleSort(getState());
			const order = getArticleSortOrder(getState());
			const search = getArticlesSearchQ(getState());
			const category = getChosenCategory(getState());

			const response: AxiosResponse = await api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_page: page,
					_limit: limit,
					_sort: sort,
					_order: order,
					type_like: category === 'all' ? undefined : category,
					q: search,
				},
			});

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Article Fetch Error');
		}
	},
);
