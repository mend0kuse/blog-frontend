export enum ArticleSortKey {
	CREATED = 'createdAt',
	VIEWS = 'views',
	TITLE = 'title',
}

export type ArticleSortOrder = 'asc' | 'desc';

export interface ArticleSortFieldSchema {
	order: ArticleSortOrder;
	sort: ArticleSortKey;
	_inited: boolean;
}
