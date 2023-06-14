import cn from '@/shared/lib/classNames/cn';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { type FC, memo } from 'react';

import { type ArticleBlockText } from '../../model/types/ArticleTypes';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
	className?: string;
	block: ArticleBlockText;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
	const {
		className,
		block: { paragraphs, title },
	} = props;

	return (
		<VStack max gap='16' className={cn(styles.articleTextBlock, {}, className)}>
			{title && <Text title={title} />}
			<div className={styles.inner}>
				{paragraphs?.map((i) => (
					<Text key={i} text={i} />
				))}
			</div>
		</VStack>
	);
});

ArticleTextBlock.displayName = 'ArticleTextBlock';
