import type { ObjectValues } from '@/shared/lib/ts/ObjectValues';

import type { ArticleBlockType, ArticleDto } from '..';
import { ARTICLE_BLOCK_TYPE } from '..';
import type { ArticleBlockByType } from '../model/types/ArticleTypes';
import { renderBlocks } from './renderBlocks';

type MappedBlocks = Array<{ type: ArticleBlockType; block: ObjectValues<ArticleBlockByType> }>;
export const mapBlocks = (article?: ArticleDto) => {
	if (!article) {
		return null;
	}

	const mappedCode: MappedBlocks = article.codeBlocks.map((item) => ({ type: ARTICLE_BLOCK_TYPE.CODE, block: item }));
	const mappedText: MappedBlocks = article.textBlocks.map((item) => ({ type: ARTICLE_BLOCK_TYPE.TEXT, block: item }));
	const mappedImage: MappedBlocks = article.imageBlocks.map((item) => ({
		type: ARTICLE_BLOCK_TYPE.IMAGE,
		block: item,
	}));

	const tmp: MappedBlocks = mappedCode.concat(mappedText, mappedImage);

	const sorted = tmp.sort((a, b) => (a.block.order ?? 0) - (b.block.order ?? 0));

	return sorted.map((item) => renderBlocks(item.type, item.block));
};
