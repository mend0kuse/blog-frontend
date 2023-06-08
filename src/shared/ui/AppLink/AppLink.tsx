import cn from 'shared/lib/classNames/cn';

import { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
	const { className, to, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props;
	return (
		<Link to={to} ref={ref} className={cn(styles.AppLink, {}, styles[theme], className)} {...otherProps}>
			{children}
		</Link>
	);
});

AppLink.displayName = 'AppLink';
