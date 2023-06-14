import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { UserActions } from '@/features/UserActions';
import { UserNotifications } from '@/features/UserNotifications';
import cn from '@/shared/lib/classNames/cn';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { HStack } from '@/shared/ui/Stack';

import { type FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.scss';

export const Navbar: FC = memo(() => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const authData = useSelector(getUserAuthData);
	const [isAuthFormOpen, setAuthFormOpen] = useState(false);

	const setAuthOpen = useCallback(() => {
		console.log('клик на войти');
		setAuthFormOpen(true);
	}, []);

	const setAuthClose = useCallback(() => {
		setAuthFormOpen(false);
	}, []);

	useEffect(() => {
		if (authData) {
			setAuthFormOpen(false);
		}
	}, [authData, setAuthFormOpen]);

	const createArticleHandler = useCallback(() => {
		navigate('/articles/new');
	}, [navigate]);

	if (authData) {
		return (
			<header className={cn(styles.Navbar, {})}>
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
		<header className={cn(styles.Navbar, {})}>
			<Button theme={ThemeButton.CLEAR_INVERTED} onClick={setAuthOpen}>
				{t('Sign in')}
			</Button>
			<LoginModal onClose={setAuthClose} open={isAuthFormOpen} />
		</header>
	);
});

Navbar.displayName = 'Navbar';
