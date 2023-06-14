import { type Profile } from '@/entities/Profile';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
	formData?: Profile;
	readonly: boolean;
	validateError?: ValidateProfileError[];
}
