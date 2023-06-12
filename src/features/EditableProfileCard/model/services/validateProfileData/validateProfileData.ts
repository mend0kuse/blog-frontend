import { type Profile } from 'entities/Profile';

import { ValidateProfileError } from '../../types/editableProfile';

export const validateProfileData = (formData: Profile | null) => {
	const errors: ValidateProfileError[] = [];

	if (formData) {
		const { first, lastname, age } = formData;

		if (!first || !lastname) {
			errors.push(ValidateProfileError.INCORRECT_USER_DATA);
		}

		if (!age || age < 1) {
			errors.push(ValidateProfileError.INCORRECT_AGE);
		}
	}

	return errors;
};
