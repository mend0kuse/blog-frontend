import cn from '@/shared/lib/classNames/cn';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type Notification } from '../../model/types/NotificationSchema';
import styles from './Notification.module.scss';

interface NotificationProps {
	className?: string;
	item: Notification;
}

export const NotificationItem = memo((props: NotificationProps) => {
	const { className, item } = props;

	const content = (
		<Card theme={CardTheme.OUTLINED} className={cn(styles.NotificationItem, {}, className)}>
			<Text title={item.title} text={item.description} />
		</Card>
	);

	if (item.href) {
		return (
			<a className={styles.link} target='_blank' href={item.href} rel='noreferrer'>
				{content}
			</a>
		);
	}

	return content;
});

NotificationItem.displayName = 'Notification';
