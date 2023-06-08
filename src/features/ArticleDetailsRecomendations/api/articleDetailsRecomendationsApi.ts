import { rtkApi } from 'shared/api/rtkApi';

const articleDetailsRecomendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecs: build.query({
			query: () => ({
				url: '/articles',
				params: {
					_limit: 3,
				},
			}),
		}),
	}),
});

export const { useGetArticleRecsQuery } = articleDetailsRecomendationsApi;
