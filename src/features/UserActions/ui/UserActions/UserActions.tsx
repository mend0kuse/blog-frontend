import { getUserAuthData, getUserIsAdmin, userActions } from '@/entities/User';
import { RouterPaths } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface UserActionsProps {
	className?: string;
}

export const UserActions = memo((props: UserActionsProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);

	const isAdmin = useSelector(getUserIsAdmin);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (!authData) {
		return null;
	}

	return (
		<Dropdown
			className={cn('', {}, className)}
			items={[
				...(isAdmin ? [{ text: 'Админка', href: RouterPaths.admin_panel }] : []),
				{ text: 'Профиль', href: RouterPaths.profile + authData.id },
				{ text: 'Выйти', onClick: onLogout },
			]}
			trigger={<Avatar src={authData.avatar} />}
		/>
	);
});

UserActions.displayName = 'UserActions';
