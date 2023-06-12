import { rtkApi } from 'shared/api/rtkApi';

import { type Notification } from '../model/types/NotificationSchema';

const notificationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getUserNotifications: build.query<Notification[], null>({
			query: () => ({
				url: '/notifications',
			}),
		}),
	}),
});

export const { useGetUserNotificationsQuery } = notificationsApi;
