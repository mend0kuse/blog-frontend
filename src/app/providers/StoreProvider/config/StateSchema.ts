import { type AxiosInstance } from 'axios';
import { type ArticleSchema } from 'enteties/Article';
import { type UserSchema } from 'enteties/User';
import { type AddNewCommentSchema } from 'features/AddNewComment';
import { type ArticleCategoriesSchema } from 'features/ArticleCategories';
import { type ArticleSortFieldSchema } from 'features/ArticleSortFields';
import { type ArticlesSearchSchema } from 'features/ArticlesSearch';
import { type LoginSchema } from 'features/AuthByUserName';
import { type ProfileSchema } from 'features/EditableProfileCard';
import { type SavePageScrollSchema } from 'features/SavePageScroll';
import { type ArticleDetailsPageSchema } from 'pages/articleDetails';
import { type ArticlesSchema } from 'pages/articles';
import { type rtkApi } from 'shared/api/rtkApi';

import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export interface StateSchema {
	user: UserSchema;
	pageScroll: SavePageScrollSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async
	profile?: ProfileSchema;
	login?: LoginSchema;
	/* ARTICLE Details */
	articleDetails?: ArticleSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
	addNewComment?: AddNewCommentSchema;
	/* ARTICLES */
	articles?: ArticlesSchema;
	articleSort?: ArticleSortFieldSchema;
	articlesSearch?: ArticlesSearchSchema;
	articlesCategories?: ArticleCategoriesSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface AsyncThunkExtra {
	api: AxiosInstance;
}

export interface AsyncThunkConfig<T> {
	extra: AsyncThunkExtra;
	rejectValue: T;
	state: StateSchema;
}
