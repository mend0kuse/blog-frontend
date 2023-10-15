import type { ArticleType, ArticleView } from '@/entities/Article';

export type ArticleCategory = 'all' | ArticleType;

export enum ArticleSortKey {
	CREATED = 'createdAt',
	VIEWS = 'views',
	TITLE = 'title',
}

export type ArticleSortOrder = 'asc' | 'desc';

export interface ArticlesSchema {
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
