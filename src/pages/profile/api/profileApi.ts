import { type Profile } from 'enteties/Profile';
import { rtkApi } from 'shared/api/rtkApi';

const profileApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query({
			query: (id: string) => ({ url: '/profile/' + id }),
		}),
		updateProfile: build.mutation({
			query: ({ id, formData }: { id?: string; formData: Profile }) => ({
				url: `/profile/${id}`,
				body: formData,
				method: 'PUT',
			}),
		}),
	}),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
