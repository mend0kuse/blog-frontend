import { memo } from 'react';

import type { ArticleView } from '@/entities/Article';
import { ArticleList } from '@/entities/Article';
import type { ReducersList } from '@/shared/store/useDinamycModuleLoader';
import { useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { HStack } from '@/shared/ui/Stack';

import { articlesReducer, useArticleActions } from '../model/articlesSlice';
import { useGetArticles } from '../model/useGetArticles';
import { ArticleCategories } from './ArticleCategories/ArticleCategories';
import { ArticleSortFields } from './ArticleSortFields/ArticleSortFields';
import { ArticlesSearch } from './ArticlesSearch/ArticlesSearch';
import { ToggleArticlesView } from './ToggleArticlesView/ToggleArticlesView';

const reducers: ReducersList = {
	articles: articlesReducer,
};

export const Articles = memo(() => {
	useDinamycModuleLoader(reducers, false);

	const { setView } = useArticleActions();

	const { articles, view, isLoading, isNextPageFetching, types } = useGetArticles();

	const viewClickHandler = (view: ArticleView) => setView(view);

	return (
		<>
			<HStack align='center' justify='between'>
				<ArticleSortFields />
				<ToggleArticlesView onClick={viewClickHandler} selected={view} />
			</HStack>
			<ArticlesSearch />
			<ArticleCategories types={types ?? []} />
			<ArticleList
				articles={articles}
				view={view}
				isLoading={isLoading}
				isNextPageFetching={isNextPageFetching}
			/>
		</>
	);
});

Articles.displayName = 'Articles';
