import type { Comment } from '@/entities/Comment';
import { rtkApi } from '@/shared/api/rtkApi';

import type { Article, ArticleDto } from '../model/types/ArticleTypes';

export const articleDetailsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleById: build.query<ArticleDto, string>({
			query: (id) => ({
				url: '/articles/' + id,
			}),
			providesTags: (result) => [{ type: 'Article' as const, id: result?.id }],
		}),

		getCommentsByArticleId: build.query<Comment[], string>({
			query: (id) => ({
				url: '/comments/article/' + id,
			}),
			providesTags: (result) => [
				...(result ?? []).map((item) => ({ type: 'Comment' as const, id: item.id })),
				'Comment',
			],
		}),

		addArticleComment: build.mutation<Comment, { id: string; text: string }>({
			query: ({ id, text }) => ({
				url: '/comments/article/' + id,
				method: 'POST',
				body: { text },
			}),
			invalidatesTags: ['Comment'],
		}),

		like: build.mutation<any, string>({
			query: (id) => ({
				url: `/articles/${id}/like`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Article'],
		}),

		dislike: build.mutation<any, string>({
			query: (id) => ({
				url: `/articles/${id}/dislike`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Article'],
		}),

		deleteArticle: build.mutation<ArticleDto, number>({
			query: (id) => ({
				url: `/articles/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Article'],
		}),

		createArticle: build.mutation<ArticleDto, Article>({
			query: (dto) => ({
				url: `/articles`,
				method: 'POST',
				body: dto,
			}),
			invalidatesTags: ['Article'],
		}),
	}),
});

export const {
	useAddArticleCommentMutation,
	useGetArticleByIdQuery,
	useGetCommentsByArticleIdQuery,
	useDislikeMutation,
	useLikeMutation,
	useDeleteArticleMutation,
	useCreateArticleMutation,
} = articleDetailsApi;
