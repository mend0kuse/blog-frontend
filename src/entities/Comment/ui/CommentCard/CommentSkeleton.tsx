import { type FC, memo } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import styles from './CommentCard.module.scss';

interface CommentSkeletonProps {
	className?: string;
}

export const CommentSkeleton: FC<CommentSkeletonProps> = memo((props) => {
	const { className } = props;

	return (
		<VStack gap='32' className={cn(styles.commentCard, {}, className)}>
			<HStack gap='16' className={styles.header}>
				<Skeleton borderRadius={50} height={30} width={30} />
				<Skeleton width={100} borderRadius={20} height={30} />
			</HStack>
			<Skeleton width={'100%'} borderRadius={20} height={100} />
		</VStack>
	);
});

CommentSkeleton.displayName = 'CommentSkeleton';
