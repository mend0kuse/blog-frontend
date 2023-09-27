import { type AxiosResponse } from 'axios';

import { type AsyncThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticleData } from './../../../entities/Article/model/selectors/articleSelectors';
import { fetchCommentsByArticleId } from './fetchArticleComments';

export const addArticleComment = createAsyncThunk<Comment, string, AsyncThunkConfig<string>>(
	'comment/addArticleComment',
	async (text, thunkAPI) => {
		const {
			extra: { api },
			dispatch,
			getState,
			rejectWithValue,
		} = thunkAPI;

		const article = getArticleData(getState());

		try {
			const response: AxiosResponse = await api.post<Comment>(`/comments/article/${article?.id}`, {
				text,
			});

			if (!response.data) throw new Error();
			dispatch(fetchCommentsByArticleId(article?.id));

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Article Add Comment Error');
		}
	},
);
