import type { Article, ArticleBlockType } from '../model/types/ArticleTypes';
import { ArticleCodeBlock } from '../ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ui/ArticleTextBlock/ArticleTextBlock';

export const renderBlocks = (article: Article | undefined, typeBlock: ArticleBlockType) => {
	switch (typeBlock) {
		case 'CODE':
			return (
				<>
					{article?.codeBlocks.map((block) => (
						<ArticleCodeBlock key={block.id} block={block} />
					))}
				</>
			);

		case 'IMAGE':
			return (
				<>
					{article?.imageBlocks.map((block) => (
						<ArticleImageBlock key={block.id} block={block} />
					))}
				</>
			);

		case 'TEXT':
			return (
				<>
					{article?.textBlocks.map((block) => (
						<ArticleTextBlock key={block.id} block={block} />
					))}
				</>
			);

		default:
			return null;
	}
};
