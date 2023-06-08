import { combineReducers } from '@reduxjs/toolkit';

import { type ArticleDetailsPageSchema } from './../types/articleDetails';
import { articleDetailsCommentsReducer } from './articleCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	comments: articleDetailsCommentsReducer,
});
