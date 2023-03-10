import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import styles from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface TextProps {
	className?: string;
	text?: string;
	theme?: ThemeText;
	title?: string;
}

export const Text: FC<TextProps> = memo((props) => {
	const { className, text, title, theme = ThemeText.PRIMARY } = props;

	return (
		<div className={cn(styles.Text, {}, styles[theme], className)}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{text && <p className={styles.paragraph}>{text}</p>}
		</div>
	);
});

Text.displayName = 'Text';
