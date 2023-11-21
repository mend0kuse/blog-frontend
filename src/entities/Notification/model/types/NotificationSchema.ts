import type { ArticleDto } from '@/entities/Article';
import type { User } from '@/entities/User';

export interface Notification {
	id: number;
	type: 'like' | 'dislike' | 'comment';
	user: User;
	article: ArticleDto;
	createdAt: string;
}
