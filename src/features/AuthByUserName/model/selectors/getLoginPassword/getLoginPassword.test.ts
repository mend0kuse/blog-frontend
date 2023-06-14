import { type StateSchema } from '@/app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginLoading', () => {
	test('shold return login password', () => {
		const state: DeepPartial<StateSchema> = {
			login: { password: 'asd' },
		};
		expect(getLoginPassword(state as StateSchema)).toEqual('asd');
	});

	test('without login state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});
