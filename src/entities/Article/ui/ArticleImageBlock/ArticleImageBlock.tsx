import { type FC, memo } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Text } from '@/shared/ui/Text';

import { type ArticleBlockImage } from '../../model/types/ArticleTypes';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
	className?: string;
	block: ArticleBlockImage;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
	const {
		block: { src, title },
		className,
	} = props;

	return (
		<div className={cn(styles.articleImageBlock, {}, className)}>
			<img src={src} alt={title} className={styles.img} />
			{title && <Text text={title} className={styles.title} />}
		</div>
	);
});

ArticleImageBlock.displayName = 'ArticleImageBlock';
