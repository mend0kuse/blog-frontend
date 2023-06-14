import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesError = (state: StateSchema) => state.articles?.error || '';
export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesView = (state: StateSchema) => state.articles?.view;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 3;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesInited = (state: StateSchema) => state.articles?._inited;
