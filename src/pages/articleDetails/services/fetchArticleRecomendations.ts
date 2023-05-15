import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Article } from 'enteties/Article';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleRecomendations = createAsyncThunk<Article[], void, AsyncThunkConfig<string>>(
	'articles/fetchArticleRecomendations',
	async (_, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_limit: 4,
				},
			});

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Article Fetch Recomendations Error');
		}
	},
);
