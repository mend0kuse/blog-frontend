import { useGetUserNotificationsQuery } from '../api/notificationApi';

export const useGetNotifications = () => {
	const { data: notifications, isLoading } = useGetUserNotificationsQuery(null, {
		pollingInterval: 5000,
	});

	return { notifications, isLoading };
};
