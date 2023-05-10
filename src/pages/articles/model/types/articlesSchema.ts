import { type Article, type ArticleView } from 'enteties/Article';

import { type EntityState } from '@reduxjs/toolkit';

export interface ArticlesSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view: ArticleView;
}
