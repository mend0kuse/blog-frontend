import { type StateSchema } from 'app/providers/StoreProvider';

import { type DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('shold return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
