import { type StateSchema } from '@/app/providers/StoreProvider';

import { getLoginEmail } from './getLoginUsername';

describe('getLoginLoading', () => {
	test('shold return login username', () => {
		const state: DeepPartial<StateSchema> = {
			login: { email: 'asd' },
		};
		expect(getLoginEmail(state as StateSchema)).toEqual('asd');
	});

	test('without login state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginEmail(state as StateSchema)).toEqual('');
	});
});
