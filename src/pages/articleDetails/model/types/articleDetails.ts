import { type Comment } from 'enteties/Comment';

import { type EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
	isLoading?: boolean;
	error?: string;
}
