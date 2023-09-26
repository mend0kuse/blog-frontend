import type { Article, ArticleType, ArticleView } from '@/entities/Article';
import type { EntityState } from '@reduxjs/toolkit';

export type ArticleCategory = 'all' | ArticleType;

export enum ArticleSortKey {
	CREATED = 'createdAt',
	VIEWS = 'views',
	TITLE = 'title',
}

export type ArticleSortOrder = 'asc' | 'desc';

export interface ArticlesSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view: ArticleView;
	limit: number;
	page: number;
	chosenCategory: ArticleCategory;
	order: ArticleSortOrder;
	sort: ArticleSortKey;
	hasMore: boolean;
	q: string;
	_inited: boolean;
}
