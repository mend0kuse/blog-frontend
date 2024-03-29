import { type ReactNode, type UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { type StateSchema, useAppDispatch } from '@/app/providers/StoreProvider';
import { getPageScrollByPathname, savePageScrollActions } from '@/features/SavePageScroll';
import cn from '@/shared/lib/classNames/cn';
import type { TestProps } from '@/shared/lib/tests/testProps';
import { useInitialEffect } from '@/shared/lib/useInitialEffect';
import { useThrottle } from '@/shared/lib/useThrottle';
import { useInViewport } from '@/shared/ui/useInViewport';

import styles from './Page.module.scss';

interface PageProps extends TestProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
	const { className, children, onScrollEnd, 'data-testId': dataTestID } = props;
	const dispatch = useAppDispatch();

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { pathname } = useLocation();
	const scroll = useSelector((state: StateSchema) => getPageScrollByPathname(state, pathname));

	useInViewport(wrapperRef, targetRef, onScrollEnd);

	useInitialEffect(() => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = scroll;
		}
	});

	const scrollHandler = useThrottle((e: UIEvent) => {
		dispatch(savePageScrollActions.setPageScroll({ path: pathname, scroll: e.currentTarget.scrollTop }));
	}, 1000);

	return (
		<main
			data-testid={dataTestID}
			onScroll={scrollHandler}
			ref={wrapperRef}
			className={cn(styles.page, {}, className)}
		>
			{children}
			<div ref={targetRef} />
		</main>
	);
};

Page.displayName = 'Page';
