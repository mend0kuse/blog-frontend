import { type StateSchema } from '@/app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
	test('shold return login error', () => {
		const state: DeepPartial<StateSchema> = {
			login: { error: 'asd' },
		};
		expect(getLoginError(state as StateSchema)).toEqual('asd');
	});

	test('without login state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginError(state as StateSchema)).toEqual(undefined);
	});
});
