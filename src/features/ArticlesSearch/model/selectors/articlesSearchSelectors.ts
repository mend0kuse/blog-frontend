import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticlesSearchQ = (state: StateSchema) => state.articlesSearch?.q || '';
export const getArticlesSearchInit = (state: StateSchema) => state.articlesSearch?._inited;
