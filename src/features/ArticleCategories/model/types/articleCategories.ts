import { type ArticleType } from 'entities/Article';

export interface ArticleCategoriesSchema {
	chosenCategory: ArticleCategory;
	_inited: boolean;
}

export type ArticleCategory = 'all' | ArticleType;
