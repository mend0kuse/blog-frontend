import { type Profile } from '@/entities/Profile';

import { ValidateProfileError } from '../../types/editableProfile';

export const validateProfileData = (formData: Profile | null) => {
	const errors: ValidateProfileError[] = [];

	if (formData) {
		const { name, surname, age } = formData;

		if (!name || !surname) {
			errors.push(ValidateProfileError.INCORRECT_USER_DATA);
		}

		if (!age) {
			errors.push(ValidateProfileError.INCORRECT_AGE);
		}
	}

	return errors;
};
