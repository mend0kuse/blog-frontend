import { type StateSchema } from 'app/providers/StoreProvider';

import { type DeepPartial } from '@reduxjs/toolkit';

import { getCounter } from './getCounter';

describe('getCounter', () => {
	test('shold return counter state', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
	});
});
