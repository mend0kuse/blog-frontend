import { type User } from '@/entities/User';

export interface ArticleBlockCode {
	id: number;
	code: string;
}

export interface ArticleBlockText {
	id: number;
	title: string;
	paragraphs: Array<{ id: number; text: string }>;
}

export interface ArticleBlockImage {
	id: number;
	title: string;
	src: string;
}

export type ArticleBlockType = 'IMAGE' | 'TEXT' | 'CODE';

export type ArticleType = 'IT' | 'Science' | 'Ecology';

export enum ArticleView {
	LIST = 'list',
	TILE = 'tile',
	PREVIEW = 'PREVIEW',
}

interface ArticleTypeWithName {
	name: ArticleType;
	id: number;
	articleId: number;
}

interface ArticleStats {
	likes: number;
	dislikes: number;
}

export interface Article {
	id: number;
	title: string;
	subtitle: string;
	preview: string;
	views: number;
	User: User;
	createdAt: string;

	ArticleStats: ArticleStats;
	types: ArticleTypeWithName[];
	textBlocks: ArticleBlockText[];
	codeBlocks: ArticleBlockCode[];
	imageBlocks: ArticleBlockImage[];
}
