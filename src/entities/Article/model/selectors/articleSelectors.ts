import { type StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/store';

export const [useGetArticleData, getArticleData] = buildSelector(
	(state: StateSchema) => state.articleDetails?.data || undefined,
);

export const [useGetArticleisLoading] = buildSelector((state: StateSchema) => state.articleDetails?.isLoading || false);

export const [useGetArticleError] = buildSelector((state: StateSchema) => state.articleDetails?.error || '');
