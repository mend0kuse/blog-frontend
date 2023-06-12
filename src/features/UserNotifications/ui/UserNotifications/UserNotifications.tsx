import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notif.svg';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popover/Popover';

import { memo } from 'react';

import styles from './UserNotifications.module.scss';

interface UserNotificationsProps {
	className?: string;
}

export const UserNotifications = memo((props: UserNotificationsProps) => {
	const { className } = props;

	return (
		<div className={cn(styles.UserNotifications, {}, className)}>
			<Popover
				trigger={
					<Button theme={ThemeButton.CLEAR}>
						<Icon inverted SVG={NotificationIcon} />
					</Button>
				}
				content={<NotificationList />}
			/>
		</div>
	);
});

UserNotifications.displayName = 'UserNotifications';
