import { type AsyncThunkConfig } from 'app/providers/StoreProvider';
import { type AxiosResponse } from 'axios';
import { type Comment } from 'enteties/Comment';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, AsyncThunkConfig<string>>(
	'comment/fetchCommentsByArticleId',
	async (id, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Comment[]>('/comments', {
				params: {
					articleId: id,
					_expand: 'user',
				},
			});

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Article Comments Fetch Error');
		}
	},
);
