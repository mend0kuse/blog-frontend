import { type Notification } from '../model/types/NotificationSchema';

export const getTitle = (type: Notification['type']) => {
	if (type === 'comment') {
		return 'Новый комментарий у вашей статьи';
	}

	if (type === 'like') {
		return 'Новый лайк у вашей статьи';
	}

	if (type === 'dislike') {
		return 'Новый дизлайк у вашей статьи';
	}

	return '';
};

export const getText = (notification: Notification) => {
	const { type, user, article } = notification;

	let text = '';
	let verb = '';

	if (type === 'comment') {
		text = 'комментарий к';
		verb = 'оставил';
	}

	if (type === 'like') {
		text = 'лайк';
		verb = 'поставил';
	}

	if (type === 'dislike') {
		text = 'дизлайк';
		verb = 'поставил';
	}

	return `Пользователь ${user ? user.email : 'Аноним'} ${verb} ${text} вашей статье ${article.title} `;
};
