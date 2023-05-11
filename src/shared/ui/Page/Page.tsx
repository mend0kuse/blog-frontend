import { useInViewport } from 'shared/hooks/useInViewport';
import cn from 'shared/lib/classNames/cn';

import { type FC, type ReactNode, memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
	const { className, children, onScrollEnd } = props;
	const { t } = useTranslation();

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const targetRef = useRef<HTMLDivElement | null>(null);

	useInViewport(wrapperRef, targetRef, onScrollEnd);

	return (
		<div ref={wrapperRef} className={cn(styles.page, {}, className)}>
			{children}
			<div ref={targetRef} />
		</div>
	);
};

Page.displayName = 'Page';
