import cn from 'shared/lib/classNames/cn';

import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './Applink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		className,
		to,
		theme = AppLinkTheme.PRIMARY,
		children,
		...otherProps
	} = props;
	return (
		<Link
			{...otherProps}
			to={to}
			className={cn(styles.Applink, {}, styles[theme])}
		>
			{children}
		</Link>
	);
};
