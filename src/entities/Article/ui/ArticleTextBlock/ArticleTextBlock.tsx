import { type FC, memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { type ArticleBlockText } from '../../model/types/ArticleTypes';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
	className?: string;
	block: ArticleBlockText | undefined;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
	const { className, block } = props;

	return (
		<VStack max gap='16' className={className}>
			{block?.title && <Text title={block.title} />}
			<div className={styles.inner}>
				{block?.paragraphs?.map((i) => (
					<Text key={i.text} text={i.text} />
				))}
			</div>
		</VStack>
	);
});

ArticleTextBlock.displayName = 'ArticleTextBlock';
