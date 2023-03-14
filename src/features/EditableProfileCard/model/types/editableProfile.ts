import { type Profile } from 'enteties/Profile';

export interface ProfileSchema {
	data?: Profile;
	formData?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
}
