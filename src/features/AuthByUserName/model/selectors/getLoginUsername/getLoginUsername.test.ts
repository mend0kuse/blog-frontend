import { type StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginLoading', () => {
	test('shold return login username', () => {
		const state: DeepPartial<StateSchema> = {
			login: { username: 'asd' },
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('asd');
	});

	test('without login state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
