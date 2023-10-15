import type { Article } from '@/entities/Article';
import type { Comment } from '@/entities/Comment';
import type { Notification } from '@/entities/Notification';
import type { Profile } from '@/entities/Profile';
import type { Theme } from '@/shared/config/themes/ThemeContext';

export type UserRole = 'user' | 'admin';

export interface UserSettings {
	theme?: Theme;
}

export interface User {
	id: string;
	email: string;
	avatar?: string;
	role: UserRole;
	profile: Profile;
	notifications?: Notification[];
	Comment?: Comment[];
	Article?: Array<Partial<Article>>;
}

export interface UserSchema {
	authData?: User;
	_init: boolean;
}
