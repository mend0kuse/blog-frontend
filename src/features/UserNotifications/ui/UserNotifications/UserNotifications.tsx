import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notif.svg';
import { mobileBreakpoint } from 'shared/const/breakpoints';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popover/Popover';

import { memo, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './UserNotifications.module.scss';

interface UserNotificationsProps {
	className?: string;
}

export const UserNotifications = memo((props: UserNotificationsProps) => {
	const { className } = props;
	const isMobile = useMediaQuery({ query: mobileBreakpoint });

	const [drawerOpen, setDrawerOpen] = useState(false);

	const closeDrawerHandler = useCallback(() => {
		setDrawerOpen(false);
	}, []);

	const openDrawerHandler = useCallback(() => {
		setDrawerOpen(true);
	}, []);

	return (
		<div className={cn(styles.UserNotifications, {}, className)}>
			{isMobile ? (
				<>
					<Button onClick={openDrawerHandler} theme={ThemeButton.CLEAR}>
						<Icon inverted SVG={NotificationIcon} />
					</Button>
					<Drawer onClose={closeDrawerHandler} open={drawerOpen}>
						<NotificationList />
					</Drawer>
				</>
			) : (
				<Popover
					trigger={
						<Button theme={ThemeButton.CLEAR}>
							<Icon inverted SVG={NotificationIcon} />
						</Button>
					}
					content={<NotificationList className={styles.popoverContent} />}
				/>
			)}
		</div>
	);
});

UserNotifications.displayName = 'UserNotifications';
