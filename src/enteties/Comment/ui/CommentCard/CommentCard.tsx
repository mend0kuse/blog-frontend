import cn from 'shared/lib/classNames/cn';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';
import { CommentSkeleton } from './CommentSkeleton';

interface CommentCardProps {
	className?: string;
	comment: Comment;
	isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
	const { className, isLoading, comment } = props;

	if (isLoading) return <CommentSkeleton />;

	return (
		<div className={cn(styles.commentCard, {}, className)}>
			<div className={styles.header}>
				<Avatar size={30} src={comment.user.avatar} />
				<Text title={comment.user.username} />
			</div>
			<Text text={comment.text} />
		</div>
	);
});

CommentCard.displayName = 'CommentCard';
