import type { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
	userId?: string;
	articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<IRating[], GetArticleRatingArg>({
			query: ({ articleId, userId }) => ({
				url: '/article-ratings',
				params: {
					articleId,
					userId,
				},
			}),
		}),
		submitArticleRating: build.mutation<IRating, IRating>({
			query: (newRating) => ({
				url: '/article-ratings',
				method: 'POST',
				body: { ...newRating },
			}),
		}),
	}),
});

export const { useGetArticleRatingQuery, useSubmitArticleRatingMutation } = articleRatingApi;
