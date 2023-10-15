import { type User } from '@/entities/User';

export interface Comment {
	id: number;
	text: string;
	articleId: number;
	user: User;
}
