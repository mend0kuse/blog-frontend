import { useSelector } from 'react-redux';

import {
	getArticleSort,
	getArticleSortOrder,
	getArticlesHasMore,
	getArticlesInited,
	getArticlesLimit,
	getArticlesPage,
	getArticlesSearchQ,
	getArticlesView,
	getChosenCategory,
} from './articleSelectors';

export type ArticlesData = ReturnType<typeof useArticlesData>;

export const useArticlesData = () => ({
	limit: useSelector(getArticlesLimit),
	view: useSelector(getArticlesView),
	page: useSelector(getArticlesPage),
	hasMore: useSelector(getArticlesHasMore),
	inited: useSelector(getArticlesInited),
	sortKey: useSelector(getArticleSort),
	order: useSelector(getArticleSortOrder),
	search: useSelector(getArticlesSearchQ),
	category: useSelector(getChosenCategory),
});
