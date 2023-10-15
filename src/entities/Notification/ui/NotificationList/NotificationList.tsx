import { useTranslation } from 'react-i18next';

import cn from '@/shared/lib/classNames/cn';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import type { Notification } from '../../model/types/NotificationSchema';
import { NotificationItem } from '../Notification/Notification';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
	className?: string;
	notifications?: Notification[];
	isLoading: boolean;
	onDelete?: (id: number) => void;
}

export const NotificationList = (props: NotificationListProps) => {
	const { className, notifications, onDelete, isLoading } = props;

	const { t } = useTranslation('');

	if (isLoading) {
		return (
			<div className={styles.list}>
				{new Array(3).fill(0).map((_, index) => (
					<Skeleton key={index} height={100} width={'100%'} />
				))}
			</div>
		);
	}

	return (
		<VStack gap='16' className={cn(styles.list, className)}>
			{notifications && notifications.length > 0 ? (
				notifications.map((item) => (
					<NotificationItem
						onDelete={() => {
							onDelete?.(item.id);
						}}
						key={item.id}
						item={item}
					/>
				))
			) : (
				<Text title={t('Empty')} />
			)}
		</VStack>
	);
};

NotificationList.displayName = 'NotificationList';
