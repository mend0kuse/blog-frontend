import { useAppDispatch } from 'app/providers/StoreProvider';
import { type ArticleView } from 'enteties/Article';
import { ArticleList } from 'enteties/Article';
import { ToggleArticlesView } from 'features/ToggleArticlesView';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import cn from 'shared/lib/classNames/cn';
import { Page } from 'widgets/Page/Page';

import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
	getArticlesHasMore,
	getArticlesInited,
	getArticlesLoading,
	getArticlesPage,
	getArticlesView,
} from '../model/selectors/articlesSelectors';
import { articlesActions, articlesReducer, getArticles } from '../model/slices/articlesSlice';
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

	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesLoading);
	const view = useSelector(getArticlesView);
	const page = useSelector(getArticlesPage);
	const hasMore = useSelector(getArticlesHasMore);
	const inited = useSelector(getArticlesInited);

	useDinamycModuleLoader(reducers, false);

	useInititalEffect(() => {
		if (!inited) {
			dispatch(articlesActions.init());
			dispatch(fetchArticles(1));
		}
	});

	const viewClickHandler = (view: ArticleView) => {
		dispatch(articlesActions.setView(view));
	};

	const nextPageFetch = useCallback(() => {
		if (!isLoading && hasMore) {
			dispatch(articlesActions.setPage(page + 1));
			dispatch(fetchArticles(page + 1));
		}
	}, [dispatch, hasMore, isLoading, page]);

	return (
		<Page onScrollEnd={nextPageFetch}>
			<div className={cn(styles.articlesPage, {}, className)}>
				<ToggleArticlesView onClick={viewClickHandler} selected={view} />
				<ArticleList articles={articles} view={view} isLoading={isLoading} />
			</div>
		</Page>
	);
};

export default memo(ArticlesPage);
