import type { FeatureFlags } from '@/shared/features';

export type UserRole = 'User' | 'Admin' | 'Manager';

export interface User {
	id: string;
	username: string;
	avatar?: string;
	role: UserRole[];
	features: FeatureFlags;
}

export interface UserSchema {
	authData?: User;
	_init: boolean;
}
