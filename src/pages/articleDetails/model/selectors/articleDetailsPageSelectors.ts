import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
export const getArticleCommentsisLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;

export const getArticleRecomendationsError = (state: StateSchema) => state.articleDetailsPage?.recomendations?.error;
export const getArticleRecomendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.recomendations?.isLoading || false;
