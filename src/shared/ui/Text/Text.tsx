import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import styles from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}

interface TextProps {
	className?: string;
	text?: string | null;
	theme?: ThemeText;
	align?: TextAlign;
	title?: string | null;
}

export const Text: FC<TextProps> = memo((props) => {
	const { className, text, title, theme = ThemeText.PRIMARY, align = TextAlign.LEFT } = props;

	return (
		<div className={cn(styles.Text, {}, styles[theme], className, styles[align])}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{text && <p className={styles.paragraph}>{text}</p>}
		</div>
	);
});

Text.displayName = 'Text';
