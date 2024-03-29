import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, getUserIsAdmin, userActions } from '@/entities/User';
import { AppRoutes, getProfilePageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';

interface UserActionsProps {
	className?: string;
}

export const UserActions = memo((props: UserActionsProps) => {
	const { className } = props;

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
				...(isAdmin ? [{ text: 'Админка', href: AppRoutes.ADMIN_PANEL }] : []),
				{ text: 'Профиль', href: getProfilePageRoute(authData.id) },
				{ text: 'Выйти', onClick: onLogout },
			]}
			trigger={<Avatar data-testId='UserAvatar' src={authData.avatar} />}
		/>
	);
});

UserActions.displayName = 'UserActions';
