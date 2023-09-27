import { memo } from 'react';

import { getArticlePageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { AppLink } from '@/shared/ui/AppLink';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { type Notification } from '../../model/types/NotificationSchema';
import styles from './Notification.module.scss';

interface NotificationProps {
	className?: string;
	item: Notification;
}

const getTitle = (type: Notification['type']) => {
	if (type === 'comment') {
		return 'Новый комментарий у вашей статьи';
	}

	if (type === 'like') {
		return 'Новый лайк у вашей статьи';
	}

	if (type === 'dislike') {
		return 'Новый дизлайк у вашей статьи';
	}

	return '';
};

const getText = (notification: Notification) => {
	const { type, user, article } = notification;

	let text = '';
	let verb = '';

	if (type === 'comment') {
		text = 'комментарий к';
		verb = 'оставил';
	}

	if (type === 'like') {
		text = 'лайк';
		verb = 'поставил';
	}

	if (type === 'dislike') {
		text = 'дизлайк';
		verb = 'поставил';
	}

	return `Пользователь ${user ? user.email : 'Аноним'} ${verb} ${text} вашей статье ${article.title} `;
};

export const NotificationItem = memo((props: NotificationProps) => {
	const { className, item } = props;

	return (
		<AppLink to={getArticlePageRoute(item.article.id.toString())}>
			<Card theme={CardTheme.OUTLINED} className={cn(styles.NotificationItem, {}, className)}>
				<Text title={getTitle(item.type)} text={getText(item)} />
			</Card>
		</AppLink>
	);
});

NotificationItem.displayName = 'Notification';
