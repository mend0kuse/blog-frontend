import { type FC, memo } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Code } from '@/shared/ui/Code';

import { type ArticleBlockCode } from '../../model/types/ArticleTypes';

interface ArticleCodeBlockProps {
	className?: string;
	block: ArticleBlockCode;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
	const { className, block } = props;

	return (
		<div className={cn('', className)}>
			<Code text={block.code} />
		</div>
	);
});

ArticleCodeBlock.displayName = 'ArticleCodeBlock';
