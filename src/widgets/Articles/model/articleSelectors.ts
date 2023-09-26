import { type StateSchema } from '@/app/providers/StoreProvider';

export const getChosenCategory = (state: StateSchema) => state.articles?.chosenCategory;

export const getArticleSort = (state: StateSchema) => state.articles?.sort;
export const getArticleSortOrder = (state: StateSchema) => state.articles?.order;

export const getArticlesSearchQ = (state: StateSchema) => state.articles?.q || '';

export const getArticlesError = (state: StateSchema) => state.articles?.error || '';
export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesView = (state: StateSchema) => state.articles?.view;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 3;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;

export const getArticlesInited = (state: StateSchema) => state.articles?._inited;
