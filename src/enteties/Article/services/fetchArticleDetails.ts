import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Article } from 'enteties/Article';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleDetails = createAsyncThunk<Article, string, AsyncThunkConfig<string>>(
	'article/fetchArticleDetails',
	async (id, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Article>('/articles/' + id);

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Article Fetch Error');
		}
	},
);
