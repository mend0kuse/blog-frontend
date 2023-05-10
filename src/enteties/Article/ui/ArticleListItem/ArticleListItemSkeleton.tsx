import cn from 'shared/lib/classNames/cn';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { memo } from 'react';

import { ArticleView } from '../../model/types/ArticleTypes';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
	className?: string;
	view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
	const { className, view } = props;

	if (view === ArticleView.LIST) {
		return (
			<div className={cn(styles.articleListItem, {}, className, styles[view])}>
				<div className={styles.header}>
					<div className={styles.user}>
						<Skeleton borderRadius='50%' height={30} width={30} />
						<Skeleton width={150} height={16} className={styles.username} />
					</div>
					<Skeleton width={150} height={16} className={styles.date} />
				</div>
				<Skeleton width={250} height={24} className={styles.title} />
				<Skeleton height={200} className={styles.imgBlock} />
				<div className={styles.footer}>
					<Skeleton height={36} width={200} />
				</div>
			</div>
		);
	}

	return (
		<div className={cn(styles.articleListItem, {}, className, styles[view])}>
			<div className={styles.imgWrapper}>
				<Skeleton width={200} height={200} className={styles.img} />
			</div>
			<div className={styles.info}>
				<Skeleton width={130} height={16} />
			</div>
			<Skeleton width={150} height={16} className={styles.title} />
		</div>
	);
});

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
