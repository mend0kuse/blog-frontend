import { memo } from 'react';

import { getArticlePageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { getText, getTitle } from '../../lib/getTextNotif';
import type { Notification } from '../../model/types/NotificationSchema';
import styles from './Notification.module.scss';

interface NotificationProps {
	className?: string;
	item: Notification;
	onDelete?: () => void;
}

export const NotificationItem = memo((props: NotificationProps) => {
	const { className, item, onDelete } = props;

	return (
		<Card theme={CardTheme.OUTLINED} className={cn(styles.item, className)}>
			<AppLink to={getArticlePageRoute(item.article.id.toString())}>
				<Text title={getTitle(item.type)} text={getText(item)} />
			</AppLink>
			<Button onClick={onDelete} theme={ThemeButton.CLEAR}>
				X
			</Button>
		</Card>
	);
});

NotificationItem.displayName = 'Notification';
