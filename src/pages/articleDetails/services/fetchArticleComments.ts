import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], number | undefined, AsyncThunkConfig<string>>(
	'comment/fetchCommentsByArticleId',
	async (id, thunkAPI) => {
		const {
			extra: { api },
			rejectWithValue,
		} = thunkAPI;

		try {
			const response: AxiosResponse = await api.get<Comment[]>(`/comments/article/${id}`);

			if (!response.data) throw new Error();
			return response.data;
		} catch (error) {
			if (isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}
			return rejectWithValue('Article Comments Fetch Error');
		}
	},
);
