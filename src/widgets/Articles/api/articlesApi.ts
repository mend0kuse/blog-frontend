import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Article, ArticleType } from '@/entities/Article';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import {
	getArticleSort,
	getArticleSortOrder,
	getArticlesLimit,
	getArticlesPage,
	getArticlesSearchQ,
	getChosenCategory,
} from '../model/articleSelectors';

interface Response {
	articles: Article[];
	types: ArticleType[];
}

export const articlesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticles: build.query<Response, void>({
			async queryFn(_, api) {
				const { getState } = api;

				const state = getState() as StateSchema;

				const limit = getArticlesLimit(state);
				const page = getArticlesPage(state);
				const sortKey = getArticleSort(state);
				const order = getArticleSortOrder(state);
				const search = getArticlesSearchQ(state);
				const category = getChosenCategory(state);

				try {
					const response = await $api.get('/articles', {
						params: {
							page,
							limit,
							sort: sortKey,
							order,
							...(category !== 'all' && { category }),
							q: search,
						},
					});

					return { data: response.data };
				} catch (error) {
					return { error } as { error: FetchBaseQueryError };
				}
			},
		}),
		getArticleRecs: build.query<Response, void>({
			query: () => ({
				url: '/articles',
				params: {
					limit: 3,
				},
			}),
		}),
	}),
});

export const { useLazyGetArticlesQuery, useGetArticleRecsQuery } = articlesApi;
