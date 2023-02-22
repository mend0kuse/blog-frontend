import cn from 'shared/lib/classNames/cn';

import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, theme, children, ...otherProps } = props;
	return (
		<button
			{...otherProps}
			data-testid='Button'
			className={cn(styles.Button, {}, className, styles[theme])}
		>
			{children}
		</button>
	);
};
