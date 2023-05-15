import { combineReducers } from '@reduxjs/toolkit';

import { type ArticleDetailsPageSchema } from './../types/articleDetails';
import { articleDetailsCommentsReducer } from './articleCommentsSlice';
import { articleDetailsRecomendationsReducer } from './articleRecomendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	comments: articleDetailsCommentsReducer,
	recomendations: articleDetailsRecomendationsReducer,
});
