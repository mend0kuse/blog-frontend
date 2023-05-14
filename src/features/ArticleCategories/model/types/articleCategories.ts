import { type ArticleType } from 'enteties/Article';

export interface ArticleCategoriesSchema {
	chosenCategory: ArticleCategory;
	_inited: boolean;
}

export type ArticleCategory = 'all' | ArticleType;
