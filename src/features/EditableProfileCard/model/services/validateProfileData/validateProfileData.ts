import { type Profile } from 'enteties/Profile';

import { ValidateProfileError } from '../../types/editableProfile';

export const validateProfileData = (formData: Profile | null) => {
	const errors: ValidateProfileError[] = [];
	console.log(formData);

	if (formData) {
		const { first, lastname, age } = formData;

		if (!first || !lastname) {
			errors.push(ValidateProfileError.INCORRECT_USER_DATA);
		}

		if (!age || age < 1) {
			errors.push(ValidateProfileError.INCORRECT_AGE);
		}
	}
	console.log(errors);

	return errors;
};
