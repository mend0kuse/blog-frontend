import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleData = (state: StateSchema) => state.articleDetails?.data || undefined;

export const getArticleisLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;

export const getArticleError = (state: StateSchema) => state.articleDetails?.error || '';
