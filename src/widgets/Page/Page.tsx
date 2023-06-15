import { type FC, type ReactNode, type UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { type StateSchema, useAppDispatch } from '@/app/providers/StoreProvider';
import { getPageScrollByPathname, savePageScrollActions } from '@/features/SavePageScroll';
import { useInViewport } from '@/shared/hooks/useInViewport';
import { useInititalEffect } from '@/shared/hooks/useInititalEffect';
import { useThrottle } from '@/shared/hooks/useThrottle';
import cn from '@/shared/lib/classNames/cn';

import styles from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
	const { className, children, onScrollEnd } = props;
	const dispath = useAppDispatch();

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { pathname } = useLocation();
	const scroll = useSelector((state: StateSchema) => getPageScrollByPathname(state, pathname));

	useInViewport(wrapperRef, targetRef, onScrollEnd);

	useInititalEffect(() => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = scroll;
		}
	});

	const scrollHandler = useThrottle((e: UIEvent) => {
		dispath(savePageScrollActions.setPageScroll({ path: pathname, scroll: e.currentTarget.scrollTop }));
	}, 1000);

	return (
		<div onScroll={scrollHandler} ref={wrapperRef} className={cn(styles.page, {}, className)}>
			{children}
			<div ref={targetRef} />
		</div>
	);
};

Page.displayName = 'Page';
