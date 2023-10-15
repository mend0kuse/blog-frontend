import type { Notification } from '@/entities/Notification';
import type { Profile } from '@/entities/Profile';
import { rtkApi } from '@/shared/api/rtkApi';

import type { User, UserSettings } from './../model/types/user';

interface AddSettingsArg {
	userId: string;
	userSettings: UserSettings;
}

export const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		addSettings: build.mutation<User, AddSettingsArg>({
			query: ({ userSettings, userId }) => ({
				url: `/users/${userId}`,
				method: 'PATCH',
				body: {
					userSettings,
				},
			}),
		}),

		getUserById: build.query<User, string>({
			query: (id) => ({
				url: `/user/${id}`,
			}),
			providesTags: ['Profile'],
		}),

		updateProfile: build.mutation({
			query: ({ formData }: { formData: Profile }) => ({
				url: `/user/profile`,
				body: formData,
				method: 'PATCH',
			}),
			invalidatesTags: ['Profile'],
		}),

		readNotifs: build.mutation({
			query: ({ ids }: { ids: number[] }) => ({
				url: `/user/notif`,
				method: 'DELETE',
				body: {
					ids,
				},
			}),
			invalidatesTags: ['Notification'],
		}),

		getNotifs: build.query<Notification[], void>({
			query: () => ({
				url: `/user/notif`,
			}),
			providesTags: (result) => [
				...(result ?? []).map((i) => ({ type: 'Notification' as const, id: i.id })),
				'Notification',
			],
		}),
	}),
});

export const {
	useReadNotifsMutation,
	useGetNotifsQuery,
	useAddSettingsMutation,
	useLazyGetUserByIdQuery,
	useGetUserByIdQuery,
	useUpdateProfileMutation,
} = userApi;
