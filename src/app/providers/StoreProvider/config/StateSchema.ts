import { type AxiosInstance } from 'axios';

import { type ArticleSchema } from '@/entities/Article';
import { type UserSchema } from '@/entities/User';
import { type AddNewCommentSchema } from '@/features/AddNewComment';
import { type LoginSchema } from '@/features/AuthByUserName';
import { type ProfileSchema } from '@/features/EditableProfileCard';
import type { RegisterSchema } from '@/features/Registration';
import { type SavePageScrollSchema } from '@/features/SavePageScroll';
import { type ArticleDetailsPageSchema } from '@/pages/articleDetails';
import { type rtkApi } from '@/shared/api/rtkApi';
import type { ArticlesSchema } from '@/widgets/Articles';
import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export interface StateSchema {
	user: UserSchema;
	pageScroll: SavePageScrollSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async
	profile?: ProfileSchema;
	login?: LoginSchema;
	register?: RegisterSchema;
	/* ARTICLE Details */
	articleDetails?: ArticleSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
	addNewComment?: AddNewCommentSchema;
	/* ARTICLES */
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
