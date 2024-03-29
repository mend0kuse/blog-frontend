import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from '@/shared/lib/classNames/cn';
import { VStack } from '@/shared/ui/Stack';
import { Text, ThemeText } from '@/shared/ui/Text';

import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentSkeleton } from '../CommentCard/CommentSkeleton';
import styles from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	isLoading?: boolean;
	comments?: Comment[];
	error?: string;
	withArticleLink?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
	const { className, comments, isLoading, error } = props;
	const { t } = useTranslation();

	if (error) {
		return <Text title={error} theme={ThemeText.ERROR} />;
	}

	if (isLoading) {
		return (
			<div className={cn(styles.commentList, className)}>
				{new Array(2).fill(0).map((_, index) => (
					<CommentSkeleton key={index} />
				))}
			</div>
		);
	}

	return (
		<div className={cn(styles.commentList, className)}>
			<Text className={styles.title} title={t('Comments')} />
			<VStack gap='16' className={styles.inner}>
				{comments?.length
					? comments.map((comm) => <CommentCard withArticleLink comment={comm} key={comm.id} />)
					: t('Not comments yet')}
			</VStack>
		</div>
	);
});

CommentList.displayName = 'CommentList';
