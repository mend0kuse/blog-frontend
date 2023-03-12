import { getUserAuthData, userActions } from 'enteties/User';
import { LoginModal } from 'features/AuthByUserName';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { type FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.scss';

export const Navbar: FC = memo(() => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const dispatch = useDispatch();

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
			navigate('/profile');
		}
	}, [authData, setAuthFormOpen, navigate]);

	return (
		<header className={cn(styles.Navbar, {})}>
			<div className={styles.buttons}>
				<Button theme={ThemeButton.CLEAR_INVERTED} onClick={authData ? onLogout : setAuthOpen}>
					{authData ? t('Log out') : t('Sign in')}
				</Button>
			</div>
			{isAuthFormOpen && <LoginModal onClose={setAuthClose} open={isAuthFormOpen} />}
		</header>
	);
});

Navbar.displayName = 'Navbar';
