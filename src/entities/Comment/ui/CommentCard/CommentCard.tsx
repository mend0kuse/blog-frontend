import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getArticlePageRoute, getProfilePageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { type Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	comment: Comment;
	withArticleLink?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
	const { className, comment, withArticleLink } = props;

	const { t } = useTranslation('');

	return (
		<VStack data-testid='CommentCard' max gap='16' className={cn(styles.card, className)}>
			<AppLink to={getProfilePageRoute(comment.user.id)} className={styles.header}>
				<HStack gap='8' align='center'>
					<Avatar size={30} src={comment.user.avatar} />
					<Text title={comment.user.profile?.username ?? comment.user.email} />
				</HStack>
			</AppLink>
			<Text text={comment.text} />
			{withArticleLink && (
				<AppLink to={getArticlePageRoute(comment.articleId.toString())}>{t('Go to article')}</AppLink>
			)}
		</VStack>
	);
});

CommentCard.displayName = 'CommentCard';
