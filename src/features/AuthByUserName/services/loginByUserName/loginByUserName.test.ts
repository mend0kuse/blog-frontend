import axios from 'axios';
import { userActions } from 'enteties/User';
import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk';

import { loginByUserName } from './loginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUserName', () => {
	test('succes', async () => {
		const asyncThunk = new TestAsyncThunk(loginByUserName);

		const userValue = { username: '123', id: '1' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await asyncThunk.callThunk({
			password: 'sdf',
			username: 'adsf',
		});

		expect(asyncThunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue),
		);
		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('error', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const asyncThunk = new TestAsyncThunk(loginByUserName);

		const result = await asyncThunk.callThunk({
			password: 'sdf',
			username: 'adsf',
		});

		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Auth error');
	});
});
