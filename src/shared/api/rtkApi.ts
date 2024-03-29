import { USER_KEY } from '@/shared/browser-storage/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	tagTypes: ['Article', 'Comment', 'Profile', 'Notification'],
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: _API_,
		prepareHeaders: (headers) => {
			headers.set('Authorization', localStorage.getItem(USER_KEY) || '');
			return headers;
		},
	}),
	endpoints: () => ({}),
});
