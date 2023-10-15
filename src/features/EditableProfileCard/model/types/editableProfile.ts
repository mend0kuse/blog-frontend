import { type Profile } from '@/entities/Profile';

export interface ProfileSchema {
	formData?: Profile;
	readonly: boolean;
}
