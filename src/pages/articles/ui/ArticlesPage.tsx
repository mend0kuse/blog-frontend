import { useAppDispatch } from 'app/providers/StoreProvider';
import { type ArticleView } from 'enteties/Article';
import { ArticleList } from 'enteties/Article';
import { ToggleArticlesView } from 'features/ToggleArticlesView';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getArticlesLoading, getArticlesView } from '../model/selectors/articlesSelectors';
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

	useDinamycModuleLoader(reducers);

	useInititalEffect(() => {
		dispatch(fetchArticles());
		dispatch(articlesActions.init());
	});

	const viewClickHandler = (view: ArticleView) => {
		dispatch(articlesActions.setView(view));
	};

	return (
		<div className={cn(styles.articlesPage, {}, className)}>
			<ToggleArticlesView onClick={viewClickHandler} selected={view} />
			<ArticleList articles={articles} view={view} isLoading={isLoading} />
		</div>
	);
};

export default memo(ArticlesPage);
