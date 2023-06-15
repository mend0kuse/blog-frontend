import { type AxiosResponse } from 'axios';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Article } from '../model/types/ArticleTypes';

export const fetchArticleDetails = createAsyncThunk<Article, string, AsyncThunkConfig<string>>(
	'article/fetchArticleDetails',
	async (id, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Article>('/articles/' + id, {
				params: {
					_expand: 'user',
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
