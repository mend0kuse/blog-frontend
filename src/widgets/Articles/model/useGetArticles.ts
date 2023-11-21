import { useCallback, useEffect, useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { useLazyGetArticlesQuery } from '../api/articlesApi';
import { useArticleActions } from './articlesSlice';
import { useArticlesData } from './useArticlesData';

export const useGetArticles = () => {
	const { init } = useArticleActions();

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
		fetch();
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
		types: data?.types,
	};
};
