import cn from 'shared/lib/classNames/cn';

import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	PRIMARY = 'primary',
	OUTLINE = 'outline',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeButton;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		size = 'size_m',
		theme,
		children,
		...otherProps
	} = props;

	return (
		<button
			{...otherProps}
			className={cn(
				styles.Button,
				{},
				className,
				styles[theme],
				styles[size],
			)}
		>
			{children}
		</button>
	);
};
