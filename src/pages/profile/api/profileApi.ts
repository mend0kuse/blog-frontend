import { type Profile } from '@/entities/Profile';
import type { User } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

const profileApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<User, { id: string }>({
			query: ({ id }) => ({ url: '/user/' + id }),
		}),
		updateProfile: build.mutation({
			query: ({ formData }: { formData: Profile }) => ({
				url: `/user/profile`,
				body: formData,
				method: 'PATCH',
			}),
		}),
	}),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
