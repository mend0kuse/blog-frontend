import { type FC } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { useGetUserNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../Notification/Notification';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
	className?: string;
}

export const NotificationList: FC<NotificationListProps> = (props) => {
	const { className } = props;

	const { data: notifications, isLoading } = useGetUserNotificationsQuery(null, {
		pollingInterval: 5000,
	});

	if (isLoading) {
		return (
			<VStack gap='16' className={cn(styles.NotificationList, {}, className)}>
				<Skeleton width='100%' borderRadius='8px' height='80px' />
				<Skeleton width='100%' borderRadius='8px' height='80px' />
				<Skeleton width='100%' borderRadius='8px' height='80px' />
			</VStack>
		);
	}

	return (
		<VStack gap='16' className={cn(styles.NotificationList, {}, className)}>
			{notifications?.map((item) => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
};

NotificationList.displayName = 'NotificationList';
