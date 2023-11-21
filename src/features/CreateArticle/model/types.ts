import type { ARTICLE_BLOCK_TYPE, ArticleBlockType, CodeType, ImageType, TextType } from '@/entities/Article';

export type NewArticleBlocksByType = {
	[ARTICLE_BLOCK_TYPE.TEXT]: { title: string; paragraphs: Array<{ text: string }> };
	[ARTICLE_BLOCK_TYPE.IMAGE]: { title: string; src: string };
	[ARTICLE_BLOCK_TYPE.CODE]: { code: string };
};

export type NewArticleBlocks = Array<
	| {
			type: TextType;
			block: NewArticleBlocksByType[TextType];
	  }
	| {
			type: ImageType;
			block: NewArticleBlocksByType[ImageType];
	  }
	| {
			type: CodeType;
			block: NewArticleBlocksByType[CodeType];
	  }
>;

export type CreateBlockFn = <T extends ArticleBlockType>({
	type,
	newBlock,
}: {
	type: T;
	newBlock: NewArticleBlocksByType[T];
}) => void;
