import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleData } from 'enteties/Article';
import { getUserAuthData } from 'enteties/User';

import { createSelector } from '@reduxjs/toolkit';

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
export const getArticleCommentsisLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;

export const getArticleRecomendationsError = (state: StateSchema) => state.articleDetailsPage?.recomendations?.error;
export const getArticleRecomendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.recomendations?.isLoading || false;

export const getCanEditArticle = createSelector(getUserAuthData, getArticleData, (user, article) => {
	return user?.id === article?.user.id;
});
