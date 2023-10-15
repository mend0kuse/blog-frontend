import { rtkApi } from '@/shared/api/rtkApi';

interface RegisterProps {
	email: string;
	name?: string;
	password: string;
}

export const registerApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation({
			query: ({ formData }: { formData: RegisterProps }) => ({
				url: `/auth/signup`,
				body: formData,
				method: 'POST',
			}),
		}),
	}),
});

export const { useRegisterMutation } = registerApi;
