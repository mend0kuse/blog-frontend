import { useCallback, useEffect, useRef } from 'react';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { useDebounce } from '@/shared/lib/useDebounce';
import { useInititalEffect } from '@/shared/lib/useInititalEffect';

import { fetchArticles } from '../services/fetchArticles';
import { useArticleActions } from './articlesSlice';
import { useArticlesData } from './useArticlesData';

export const useGetArticles = () => {
	const firstRender = useRef(true);

	const dispatch = useAppDispatch();

	const { init, setPage } = useArticleActions();
	const { category, hasMore, inited, isLoading, order, page, search, sortKey, articles, view } = useArticlesData();

	useInititalEffect(() => {
		if (!inited) {
			init();
			dispatch(fetchArticles({}));
		}
	});

	/* Fetch Logic */
	const fetchWithReplace = useCallback(() => {
		dispatch(fetchArticles({ replace: true }));
	}, [dispatch]);

	const fetchDataWithDebounce = useDebounce(fetchWithReplace, 500);

	const nextPageFetch = useCallback(() => {
		if (!isLoading && hasMore) {
			setPage(page + 1);
			dispatch(fetchArticles({}));
		}
	}, [dispatch, hasMore, isLoading, page, setPage]);

	/* Observe filters change */
	useEffect(() => {
		if (firstRender.current) return;

		setPage(1);
		fetchWithReplace();
	}, [dispatch, fetchWithReplace, order, sortKey, category, setPage]);

	/* Observe search */
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		setPage(1);
		fetchDataWithDebounce();
	}, [dispatch, fetchDataWithDebounce, search, setPage]);

	return { articles, view, isLoading, nextPageFetch };
};
