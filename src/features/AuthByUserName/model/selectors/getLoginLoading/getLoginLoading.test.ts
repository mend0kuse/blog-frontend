import { type StateSchema } from '@/app/providers/StoreProvider';

import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
	test('shold return login loading', () => {
		const state: DeepPartial<StateSchema> = {
			login: { isLoading: true },
		};
		expect(getLoginLoading(state as StateSchema)).toEqual(true);
	});

	test('without login state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginLoading(state as StateSchema)).toEqual(false);
	});
});
