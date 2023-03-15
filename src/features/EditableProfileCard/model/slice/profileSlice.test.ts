import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

import { type ProfileSchema, ValidateProfileError } from '../types/editableProfile';
import { changeProfileData } from './../services/changeProfileData/changeProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
	username: 'admin',
	age: 22,
	country: Country.Ukraine,
	lastname: 'asd',
	first: 'asd',
	city: 'asf',
	currency: Currency.USD,
};

describe('profileSlice', () => {
	test('readonly', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			readonly: true,
		};
		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
			isLoading: true,
			readonly: false,
		});
	});

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = { data, formData: { username: '123123' } };

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			formData: data,
		});
	});

	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = { formData: { username: '123' } };

		expect(profileReducer(state as ProfileSchema, profileActions.setUsername('123456'))).toEqual({
			formData: { username: '123456' },
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.SERVER_ERROR],
		};

		expect(profileReducer(state as ProfileSchema, changeProfileData.pending)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fullfiled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};

		expect(profileReducer(state as ProfileSchema, changeProfileData.fulfilled(data, ''))).toEqual({
			data,
			isLoading: false,
			readonly: true,
			validateError: undefined,
			formData: data,
		});
	});
});
