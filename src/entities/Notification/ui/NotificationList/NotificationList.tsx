import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import cn from '@/shared/lib/classNames/cn';
import { VStack } from '@/shared/ui/Stack';

import { NotificationItem } from '../Notification/Notification';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
	const { className } = props;

	const user = useSelector(getUserAuthData);

	if (!user) {
		return null;
	}

	return (
		<VStack gap='16' className={cn(styles.NotificationList, {}, className)}>
			{user.notifications?.map((item) => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
};

NotificationList.displayName = 'NotificationList';
