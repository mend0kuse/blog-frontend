import { useMemo } from 'react';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import type { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
	options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
	const slice = createSlice(options);

	const useActions = (): typeof slice.actions => {
		const dispatch = useAppDispatch();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
		// @ts-ignore
		return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
	};

	return {
		...slice,
		useActions,
	};
};
