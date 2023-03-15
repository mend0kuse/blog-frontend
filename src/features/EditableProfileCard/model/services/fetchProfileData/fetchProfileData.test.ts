import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk';

import { fetchProfileData } from './fetchProfileData';

const data = {
	username: 'admin',
	age: 22,
	country: Country.Ukraine,
	lastname: '123',
	first: 'asd',
	city: 'asf',
	currency: Currency.USD,
};

describe('fetchProfileData', () => {
	test('succes', async () => {
		const asyncThunk = new TestAsyncThunk(fetchProfileData);

		asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await asyncThunk.callThunk();

		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
		expect(asyncThunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const asyncThunk = new TestAsyncThunk(fetchProfileData);

		asyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await asyncThunk.callThunk();

		expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
		expect(asyncThunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Profile Error');
	});
});
