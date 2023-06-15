import { type FC } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import styles from './ArticleSkeleton.module.scss';

interface ArticleSkeletonProps {
	className?: string;
}

export const ArticleSkeleton: FC<ArticleSkeletonProps> = (props) => {
	const { className } = props;

	return (
		<div className={cn(styles.articleSkeleton, {}, className)}>
			<Skeleton className={styles.avatar} width={200} height={200} borderRadius='50%' />
			<Skeleton width={670} height={31} />
			<Skeleton width={399} height={31} />
			<Skeleton width={1090} height={231} />
			<Skeleton width={1090} height={231} />
		</div>
	);
};
