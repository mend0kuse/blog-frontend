import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorString = (error: FetchBaseQueryError | SerializedError | undefined) => {
	if (!error) {
		return '';
	}

	if ('status' in error) {
		const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

		return errMsg;
	}

	return error.message ?? '';
};
