import { type User, userActions } from 'enteties/User';
import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk';

import { loginByUserName } from './loginByUserName';

describe('loginByUserName', () => {
	test('succes', async () => {
		const asyncThunk = new TestAsyncThunk(loginByUserName);

		const userValue: User = { username: '123', id: '1', role: ['Admin'] };
		asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await asyncThunk.callThunk({
			password: 'sdf',
			username: 'adsf',
		});

		expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
		expect(asyncThunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('error', async () => {
		const asyncThunk = new TestAsyncThunk(loginByUserName);

		asyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await asyncThunk.callThunk({
			password: 'sdf',
			username: 'adsf',
		});

		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
		expect(asyncThunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Auth error');
	});
});
