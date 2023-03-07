import { getUserAuthData, userActions } from 'enteties/User';
import { LoginModal } from 'features/AuthByUserName';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import {
	type DetailedHTMLProps,
	type FC,
	type HTMLAttributes,
	useCallback,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Navbar.module.scss';

interface NavbarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

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

	return (
		<header className={cn(styles.Navbar, {}, className)}>
			<div className={styles.buttons}>
				<Button
					theme={ThemeButton.CLEAR_INVERTED}
					onClick={authData ? onLogout : setAuthOpen}
				>
					{authData ? t('Log out') : t('Sign in')}
				</Button>
			</div>
			{isAuthFormOpen && (
				<LoginModal onClose={setAuthClose} open={isAuthFormOpen} />
			)}
		</header>
	);
};
