import { useCallback, useEffect, useRef, useState } from 'react';

import type { ArticleType } from '@/entities/Article';
import { useDebounce } from '@/shared/lib/useDebounce';

import { useLazyGetArticlesQuery } from '../api/articlesApi';
import { useArticleActions } from './articlesSlice';
import { useArticlesData } from './useArticlesData';

export const useGetArticles = () => {
	const { init } = useArticleActions();

	const [firstTypes, setFirstTypes] = useState<ArticleType[]>([]);
	const isFirstRequest = useRef(true);

	init();

	const articlesData = useArticlesData();
	const { category, hasMore, order, search, sortKey, view } = articlesData;

	const [isNextPageFetching, setIsNextPageFetching] = useState(false);

	const [fetch, { data, isFetching }] = useLazyGetArticlesQuery({ refetchOnFocus: true });

	/* Fetch Logic */
	const debouncedFetch = useDebounce(fetch, 500);

	const nextPageFetch = useCallback(() => {
		if (!isFetching && hasMore) {
			setIsNextPageFetching(true);
			fetch();
			setIsNextPageFetching(false);
		}
	}, [isFetching, hasMore, fetch]);

	/* Observe filters change */
	useEffect(() => {
		const refetch = async () => {
			const response = await fetch();

			if (isFirstRequest.current && response.data) {
				setFirstTypes(response.data.types);
				isFirstRequest.current = false;
			}
		};

		refetch();
	}, [order, sortKey, category, fetch]);

	/* Observe search */
	useEffect(() => {
		debouncedFetch();
	}, [debouncedFetch, search]);

	return {
		articles: data?.articles,
		view,
		isLoading: isFetching,
		nextPageFetch,
		isNextPageFetching,
		types: firstTypes,
	};
};
