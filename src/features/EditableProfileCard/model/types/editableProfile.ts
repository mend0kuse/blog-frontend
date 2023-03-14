import { type Profile } from 'enteties/Profile';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
	data?: Profile;
	formData?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateError?: ValidateProfileError[];
}
