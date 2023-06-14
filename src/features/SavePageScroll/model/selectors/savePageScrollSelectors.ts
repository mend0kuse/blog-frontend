import { type StateSchema } from '@/app/providers/StoreProvider';

import { createSelector } from '@reduxjs/toolkit';

export const getPageScroll = (state: StateSchema) => state.pageScroll;

export const getPageScrollByPathname = createSelector(
	getPageScroll,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0,
);
