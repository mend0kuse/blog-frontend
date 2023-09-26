import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { UserActions } from '@/features/UserActions';
import { UserNotifications } from '@/features/UserNotifications';
import cn from '@/shared/lib/classNames/cn';
import { useToggler } from '@/shared/lib/useToggler';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import styles from './Navbar.module.scss';

export const Navbar = memo(() => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const { setFalse: setAuthClose, setTrue: setAuthOpen, value: isAuthFormOpen } = useToggler();

	const authData = useSelector(getUserAuthData);

	useEffect(() => {
		if (authData) {
			setAuthClose();
		}
	}, [authData, setAuthClose]);

	const createArticleHandler = useCallback(() => {
		navigate('/articles/new');
	}, [navigate]);

	if (authData) {
		return (
			<header data-testid='Navbar' className={cn(styles.Navbar, {})}>
				<HStack justify='end' gap='16' align='center'>
					<Button onClick={createArticleHandler} theme={ThemeButton.CLEAR_INVERTED}>
						{t('New article')}
					</Button>
					<UserNotifications />
					<UserActions />
				</HStack>
			</header>
		);
	}

	return (
		<header data-testid='Navbar' className={cn(styles.Navbar, {})}>
			<Button theme={ThemeButton.CLEAR_INVERTED} onClick={setAuthOpen}>
				{t('Sign in')}
			</Button>
			<LoginModal onClose={setAuthClose} open={isAuthFormOpen} />
		</header>
	);
});

Navbar.displayName = 'Navbar';
