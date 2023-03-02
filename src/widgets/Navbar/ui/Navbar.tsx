import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';

import {
	type DetailedHTMLProps,
	type FC,
	type HTMLAttributes,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

interface NavbarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props;

	const [isAuthOpen, setIsAuthOpen] = useState(false);

	const toggleAuthOpen = () => {
		setIsAuthOpen((prev) => !prev);
	};

	const { t } = useTranslation();

	return (
		<header className={cn(styles.Navbar, {}, className)}>
			<div className={styles.buttons}>
				<Button
					theme={ThemeButton.CLEAR_INVERTED}
					onClick={toggleAuthOpen}
				>
					{t('Sign in')}
				</Button>
			</div>
			<Portal>
				<Modal open={isAuthOpen} onClose={toggleAuthOpen}>
					{t(
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea',
					)}
				</Modal>
			</Portal>
		</header>
	);
};
