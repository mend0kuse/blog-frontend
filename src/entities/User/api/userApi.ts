import { rtkApi } from '@/shared/api/rtkApi';

import type { User, UserSettings } from './../model/types/user';

interface AddSettingsArg {
	userId: string;
	userSettings: UserSettings;
}

const userApi = rtkApi.injectEndpoints({
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
				url: `/users/${id}`,
			}),
		}),
	}),
});

export const { useAddSettingsMutation, useLazyGetUserByIdQuery } = userApi;
export { userApi };
