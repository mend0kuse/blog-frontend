import { type FC, memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import cn from '@/shared/lib/classNames/cn';

import { Button } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code: FC<CodeProps> = memo((props) => {
	const { className, text } = props;

	const onCopy = useCallback(async () => {
		await navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={cn(styles.Code, className)}>
			<Button className={styles.btn} onClick={onCopy}>
				<CopyIcon />
			</Button>
			<code>{text}</code>
		</pre>
	);
});

Code.displayName = 'Code';
