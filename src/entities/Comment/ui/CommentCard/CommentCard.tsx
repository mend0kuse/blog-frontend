import { RouterPaths } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { type FC, memo } from 'react';

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
		<VStack max gap='16' className={cn(styles.commentCard, {}, className)}>
			<AppLink to={`${RouterPaths.profile}${comment.user.id}`} className={styles.header}>
				<HStack gap='8' align='center'>
					<Avatar size={30} src={comment.user.avatar} />
					<Text title={comment.user.username} />
				</HStack>
			</AppLink>
			<Text text={comment.text} />
		</VStack>
	);
});

CommentCard.displayName = 'CommentCard';
