import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticlesError = (state: StateSchema) => state.articles?.error || '';
export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesView = (state: StateSchema) => state.articles?.view;
