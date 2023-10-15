import { useCallback, useEffect, useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { useLazyGetArticlesQuery } from '../api/articlesApi';
import { useArticleActions } from './articlesSlice';
import { useArticlesData } from './useArticlesData';

export const useGetArticles = () => {
	const { init, setPage } = useArticleActions();

	init();

	const articlesData = useArticlesData();
	const { category, hasMore, order, page, search, sortKey, view } = articlesData;

	const [isNextPageFetching, setIsNextPageFetching] = useState(false);

	const [fetch, { data, isFetching }] = useLazyGetArticlesQuery({ refetchOnFocus: true });

	/* Fetch Logic */
	const debouncedFetch = useDebounce(fetch, 500);

	const nextPageFetch = useCallback(() => {
		if (!isFetching && hasMore) {
			setPage(page + 1);
			setIsNextPageFetching(true);
			fetch();
			setIsNextPageFetching(false);
		}
	}, [isFetching, hasMore, setPage, page, fetch]);

	/* Observe filters change */
	useEffect(() => {
		setPage(1);
		fetch();
	}, [order, sortKey, category, fetch, setPage]);

	/* Observe search */
	useEffect(() => {
		setPage(1);
		debouncedFetch();
	}, [debouncedFetch, search, setPage]);

	return {
		articles: data?.articles,
		view,
		isLoading: isFetching,
		nextPageFetch,
		isNextPageFetching,
		types: data?.types,
	};
};
