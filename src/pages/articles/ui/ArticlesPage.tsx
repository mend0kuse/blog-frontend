import { type FC, memo, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { ArticleList, type ArticleView } from '@/entities/Article';
import { ArticleCategories, getChosenCategory } from '@/features/ArticleCategories';
import { ArticleSortFields, getArticleSort, getArticleSortOrder } from '@/features/ArticleSortFields';
import { ArticlesSearch, getArticlesSearchQ } from '@/features/ArticlesSearch';
import { ToggleArticlesView } from '@/features/ToggleArticlesView';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from '@/shared/hooks/useInititalEffect';
import cn from '@/shared/lib/classNames/cn';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import {
	getArticlesHasMore,
	getArticlesInited,
	getArticlesLoading,
	getArticlesPage,
	getArticlesView,
} from '../model/selectors/articlesSelectors';
import { articlesReducer, getArticles, useArticleActions } from '../model/slices/articlesSlice';
import { fetchArticles } from '../services/fetchArticles';
import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
	className?: string;
}

const reducers: ReducersList = {
	articles: articlesReducer,
};

const ArticlesPage: FC<ArticlePageProps> = (props) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers, false);

	const { init, setPage, setView } = useArticleActions();

	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesLoading);
	const view = useSelector(getArticlesView);
	const page = useSelector(getArticlesPage);
	const hasMore = useSelector(getArticlesHasMore);
	const inited = useSelector(getArticlesInited);

	const sortKey = useSelector(getArticleSort);
	const order = useSelector(getArticleSortOrder);
	const search = useSelector(getArticlesSearchQ);
	const category = useSelector(getChosenCategory);

	const firstRender = useRef(true);

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

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		setPage(1);
		fetchDataWithDebounce();
	}, [dispatch, fetchDataWithDebounce, search, setPage]);

	/* Handlers */
	const viewClickHandler = (view: ArticleView) => {
		setView(view);
	};

	return (
		<Page onScrollEnd={nextPageFetch}>
			<div className={cn(styles.articlesPage, {}, className)}>
				<HStack align='center' justify='between'>
					<ArticleSortFields />
					<ToggleArticlesView onClick={viewClickHandler} selected={view} />
				</HStack>
				<ArticlesSearch />
				<ArticleCategories />
				<ArticleList articles={articles} view={view} isLoading={isLoading} />
			</div>
		</Page>
	);
};

export default memo(ArticlesPage);
