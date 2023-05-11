import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Article } from 'enteties/Article';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesLimit } from '../model/selectors/articlesSelectors';

export const fetchArticles = createAsyncThunk<Article[], number, AsyncThunkConfig<string>>(
	'articles/fetchArticles',
	async (page, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
			dispatch,
			getState,
		} = thunkAPI;

		try {
			const limit = getArticlesLimit(getState());

			const response: AxiosResponse = await api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_page: page,
					_limit: limit,
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
