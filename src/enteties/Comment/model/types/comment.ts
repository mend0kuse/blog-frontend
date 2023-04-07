import { type User } from 'enteties/User';

export interface Comment {
	id: string;
	text: string;
	user: User;
}
