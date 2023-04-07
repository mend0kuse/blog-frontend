import cn from 'shared/lib/classNames/cn';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { type FC, memo } from 'react';

import styles from './CommentCard.module.scss';

interface CommentSkeletonProps {
	className?: string;
}

export const CommentSkeleton: FC<CommentSkeletonProps> = memo((props) => {
	const { className } = props;

	return (
		<div className={cn(styles.commentCard, {}, className)}>
			<div className={styles.header}>
				<Skeleton borderRadius={50} height={30} width={30} />
				<Skeleton width={100} borderRadius={20} height={30} />
			</div>
			<Skeleton width={'100%'} borderRadius={20} height={100} />
		</div>
	);
});

CommentSkeleton.displayName = 'CommentSkeleton';
