import { type User } from '@/entities/User';
import type { OneOfProperty } from '@/shared/lib/ts/oneOfProperty';
import { createEnumsMixin } from '@/shared/lib/ts/oneOfProperty';

export const IMAGE_TYPE = {
	IMAGE: 'image',
} as const;
export type ImageType = OneOfProperty<typeof IMAGE_TYPE>;

export const TEXT_TYPE = {
	TEXT: 'text',
} as const;
export type TextType = OneOfProperty<typeof TEXT_TYPE>;

export const CODE_TYPE = {
	CODE: 'code',
} as const;
export type CodeType = OneOfProperty<typeof CODE_TYPE>;

export const ARTICLE_BLOCK_TYPE = createEnumsMixin(IMAGE_TYPE, TEXT_TYPE, CODE_TYPE);

export type ArticleBlockType = OneOfProperty<typeof ARTICLE_BLOCK_TYPE>;

export interface WithOrder {
	order?: number;
}

export interface ArticleBlockCode extends WithOrder {
	code: string;
}

export interface ArticleBlockText extends WithOrder {
	title: string;
	paragraphs: Array<{ text: string }>;
}

export interface ArticleBlockImage extends WithOrder {
	title: string;
	src: string;
}

export type ArticleBlockByType = {
	[ARTICLE_BLOCK_TYPE.IMAGE]: ArticleBlockImage;
	[ARTICLE_BLOCK_TYPE.TEXT]: ArticleBlockText;
	[ARTICLE_BLOCK_TYPE.CODE]: ArticleBlockCode;
};

export type ArticleType = 'IT' | 'Science' | 'Ecology';

export enum ArticleView {
	LIST = 'list',
	TILE = 'tile',
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

export interface ArticleDto extends Article {
	id: number;
	views: number;
	User: User;
	createdAt: string;

	ArticleStats: ArticleStats;
}

export interface Article {
	title: string;
	subtitle: string;
	preview: string;
	types: ArticleTypeWithName[];
	textBlocks: ArticleBlockText[];
	codeBlocks: ArticleBlockCode[];
	imageBlocks: ArticleBlockImage[];
}
