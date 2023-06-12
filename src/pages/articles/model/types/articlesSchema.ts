import { type Article, type ArticleView } from 'entities/Article';

import { type EntityState } from '@reduxjs/toolkit';

export interface ArticlesSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view: ArticleView;
	limit: number;
	page: number;
	hasMore: boolean;
	_inited: boolean;
}
