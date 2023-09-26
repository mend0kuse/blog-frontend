import { useSelector } from 'react-redux';

import {
	getArticleSort,
	getArticleSortOrder,
	getArticlesHasMore,
	getArticlesInited,
	getArticlesLoading,
	getArticlesPage,
	getArticlesSearchQ,
	getArticlesView,
	getChosenCategory,
} from './articleSelectors';
import { getArticles } from './articlesSlice';

export const useArticlesData = () => ({
	articles: useSelector(getArticles.selectAll),
	isLoading: useSelector(getArticlesLoading),
	view: useSelector(getArticlesView),
	page: useSelector(getArticlesPage),
	hasMore: useSelector(getArticlesHasMore),
	inited: useSelector(getArticlesInited),
	sortKey: useSelector(getArticleSort),
	order: useSelector(getArticleSortOrder),
	search: useSelector(getArticlesSearchQ),
	category: useSelector(getChosenCategory),
});
