import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorString = (error: FetchBaseQueryError | SerializedError | undefined) => {
	if (!error) {
		return '';
	}

	if ('status' in error) {
		// @ts-expect-error
		const errMsg = 'error' in error ? error.error : error.data.message;

		return errMsg;
	}

	return error.message ?? '';
};
