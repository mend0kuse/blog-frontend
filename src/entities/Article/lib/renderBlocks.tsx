import type { ArticleBlockByType } from '../model/types/ArticleTypes';
import { ARTICLE_BLOCK_TYPE } from '../model/types/ArticleTypes';
import { ArticleCodeBlock } from '../ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ui/ArticleTextBlock/ArticleTextBlock';

export const renderBlocks = <T extends keyof ArticleBlockByType>(type: T, block: ArticleBlockByType[T]) => {
	if (type === ARTICLE_BLOCK_TYPE.TEXT) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		return <ArticleTextBlock block={block} />;
	}

	if (type === ARTICLE_BLOCK_TYPE.CODE) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		return <ArticleCodeBlock block={block} />;
	}

	if (type === ARTICLE_BLOCK_TYPE.IMAGE) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		return <ArticleImageBlock block={block} />;
	}

	return null;
};
