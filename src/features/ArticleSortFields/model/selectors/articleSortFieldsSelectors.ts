import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleSort = (state: StateSchema) => state.articleSort?.sort;
export const getArticleSortOrder = (state: StateSchema) => state.articleSort?.order;
export const getArticleSortInited = (state: StateSchema) => state.articleSort?._inited;
