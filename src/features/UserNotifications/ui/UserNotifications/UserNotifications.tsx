import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { NotificationList } from '@/entities/Notification';
import { useGetNotifsQuery, useReadNotifsMutation } from '@/entities/User';
import NotificationIcon from '@/shared/assets/icons/notif.svg';
import cn from '@/shared/lib/classNames/cn';
import { useToggler } from '@/shared/lib/useToggler';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popover';
import { mobileBreakpoint } from '@/shared/ui/breakpoints';

import styles from './UserNotifications.module.scss';

interface UserNotificationsProps {
	className?: string;
}

export const UserNotifications = memo((props: UserNotificationsProps) => {
	const { className } = props;
	const isMobile = useMediaQuery({ query: mobileBreakpoint });

	const { t } = useTranslation();

	const { value: drawerOpen, setTrue: openDrawerHandler, setFalse: closeDrawerHandler } = useToggler();

	const { data, isFetching: isFetchingNotifs } = useGetNotifsQuery();

	const [readNofifs, { isLoading: isReadingNotifs }] = useReadNotifsMutation();

	const onDelete = (id: number) => {
		readNofifs({ ids: [id] });
	};

	const onReadAll = () => {
		if (!data) return;

		readNofifs({ ids: data.map((i) => i.id) });
	};

	const isLoading = isFetchingNotifs || isReadingNotifs;

	const count = data?.length ?? 0;

	const readAll =
		count > 0 ? (
			<Button onClick={onReadAll} className={styles.readAll} disabled={isLoading}>
				{t('Read all')}
			</Button>
		) : null;

	return (
		<div className={cn(styles.wrapper, className)}>
			{isMobile ? (
				<>
					<Button className={styles.btn} onClick={openDrawerHandler} theme={ThemeButton.CLEAR}>
						{count > 0 && <span className={styles.count}>{count}</span>}
						<Icon inverted SVG={NotificationIcon} />
					</Button>
					<Drawer onClose={closeDrawerHandler} isOpen={drawerOpen}>
						{readAll}
						<NotificationList onDelete={onDelete} isLoading={isLoading} notifications={data} />
					</Drawer>
				</>
			) : (
				<Popover
					trigger={
						<Button className={styles.btn} theme={ThemeButton.CLEAR}>
							{count > 0 && <span className={styles.count}>{count}</span>}
							<Icon inverted SVG={NotificationIcon} />
						</Button>
					}
					content={
						<>
							{readAll}
							<NotificationList
								onDelete={onDelete}
								isLoading={isLoading}
								notifications={data}
								className={styles.popoverContent}
							/>
						</>
					}
				/>
			)}
		</div>
	);
});

UserNotifications.displayName = 'UserNotifications';
