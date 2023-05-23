import { getUserAuthData, userActions } from 'enteties/User';
import { LoginModal } from 'features/AuthByUserName';
import { RouterPaths } from 'shared/config/routes/routes';
import cn from 'shared/lib/classNames/cn';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Icon } from 'shared/ui/Icon/Icon';

import { type FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.scss';

export const Navbar: FC = memo(() => {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authData = useSelector(getUserAuthData);

	const [isAuthFormOpen, setAuthFormOpen] = useState(false);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
		setAuthFormOpen(false);
	}, [dispatch]);

	const setAuthOpen = useCallback(() => {
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
				<Button onClick={createArticleHandler} theme={ThemeButton.CLEAR_INVERTED}>
					{t('New article')}
				</Button>
				<Dropdown
					items={[
						{ text: 'Профиль', href: RouterPaths.profile + authData.id },
						{ text: 'Выйти', onClick: onLogout },
					]}
					trigger={<Avatar src={authData.avatar} />}
				/>
			</header>
		);
	}

	return (
		<header className={cn(styles.Navbar, {})}>
			<Button theme={ThemeButton.CLEAR_INVERTED} onClick={setAuthOpen}>
				{t('Sign in')}
			</Button>
			{isAuthFormOpen && <LoginModal onClose={setAuthClose} open={isAuthFormOpen} />}
		</header>
	);
});

Navbar.displayName = 'Navbar';
