export enum AricleBlockType {
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
	CODE = 'CODE',
}

export interface ArticleBlockBasis {
	id: string;
	type: AricleBlockType;
}

export interface ArticleBlockCode extends ArticleBlockBasis {
	type: AricleBlockType.CODE;
	code: string;
}

export interface ArticleBlockText extends ArticleBlockBasis {
	type: AricleBlockType.TEXT;
	title?: string;
	paragraphs: string[];
}

export interface ArticleBlockImage extends ArticleBlockBasis {
	type: AricleBlockType.IMAGE;
	title: string;
	src: string;
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText;

export enum ArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
