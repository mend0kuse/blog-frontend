import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'shared/lib/classNames/cn';
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, theme, children, ...otherProps } = props
	return (
		<button {...otherProps} className={cn(styles.Button, {}, className, styles[theme])}>
			{children}
		</button>
	);
};