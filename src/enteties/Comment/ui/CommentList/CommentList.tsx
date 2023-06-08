import cn from 'shared/lib/classNames/cn';
import { VStack } from 'shared/ui/Stack';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	isLoading?: boolean;
	comments?: Comment[];
	error?: string;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
	const { className, comments, isLoading, error } = props;
	const { t } = useTranslation();

	if (error) {
		return <Text title={error} theme={ThemeText.ERROR} />;
	}

	return (
		<div className={cn(styles.commentList, {}, className)}>
			<Text className={styles.title} title={t('Comments')} />
			<VStack gap='16' className={styles.inner}>
				{comments?.length
					? comments.map((comm) => <CommentCard isLoading={isLoading} comment={comm} key={comm.id} />)
					: t('Not comments yet')}
			</VStack>
		</div>
	);
});

CommentList.displayName = 'CommentList';
