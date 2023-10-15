import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

import { ArticleSortKey } from './articlesTypes';

export const getChosenCategory = (state: StateSchema) => state.articles?.chosenCategory ?? 'all';

export const getArticleSort = (state: StateSchema) => state.articles?.sort ?? ArticleSortKey.VIEWS;
export const getArticleSortOrder = (state: StateSchema) => state.articles?.order ?? 'asc';

export const getArticlesSearchQ = (state: StateSchema) => state.articles?.q || '';

export const getArticlesView = (state: StateSchema) => state.articles?.view ?? ArticleView.TILE;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 3;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore ?? false;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;

export const getArticlesInited = (state: StateSchema) => state.articles?._inited ?? false;
