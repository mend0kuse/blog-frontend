import type { Theme } from '@/shared/config/themes/ThemeContext';
import type { FeatureFlags } from '@/shared/features';

export type UserRole = 'User' | 'Admin' | 'Manager';

export interface UserSettings {
	theme?: Theme;
}

export interface User {
	id: string;
	username: string;
	avatar?: string;
	role: UserRole[];
	features: FeatureFlags;
	userSettings?: UserSettings;
}

export interface UserSchema {
	authData?: User;
	_init: boolean;
}
