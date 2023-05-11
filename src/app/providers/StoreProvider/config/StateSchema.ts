import { type AxiosInstance } from 'axios';
import { type ArticleSchema } from 'enteties/Article';
import { type CounterSchema } from 'enteties/Counter';
import { type UserSchema } from 'enteties/User';
import { type AddNewCommentSchema } from 'features/AddNewComment';
import { type LoginSchema } from 'features/AuthByUserName';
import { type ProfileSchema } from 'features/EditableProfileCard';
import { type SavePageScrollSchema } from 'features/SavePageScroll';
import { type ArticleDetailsCommentsSchema } from 'pages/articleDetails';
import { type ArticlesSchema } from 'pages/articles';

import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	pageScroll: SavePageScrollSchema;
	// Async
	profile?: ProfileSchema;
	login?: LoginSchema;
	articleDetails?: ArticleSchema;
	addNewComment?: AddNewCommentSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
	articles?: ArticlesSchema;
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
