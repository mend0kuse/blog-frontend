import { type Article } from './ArticleTypes';

export interface ArticleSchema {
	data?: Article;
	error?: string;
	isLoading?: boolean;
}
