import { useAppDispatch } from '@/app/providers/StoreProvider';
import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { type Profile, ProfileCard } from '@/entities/Profile';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/hooks/useDinamycModuleLoader';
import cn from '@/shared/lib/classNames/cn';
import { Text, ThemeText } from '@/shared/ui/Text/Text';

import { type FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfile';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
	className?: string;
	profile?: Profile;
	isLoading?: boolean;
	error?: FetchBaseQueryError | SerializedError;
	updateHandler: (formData: Profile) => void;
}

const reducers: ReducersList = {
	profile: profileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
	const { profile, updateHandler, isLoading, error } = props;

	const { t } = useTranslation('profile');

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	useEffect(() => {
		if (profile) {
			dispatch(profileActions.setFormData(profile));
		}
	}, [dispatch, profile]);

	const formData = useSelector(getProfileFormData);

	const readOnly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const ValidateErrorsTranslated = {
		[ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
		[ValidateProfileError.SERVER_ERROR]: t('Server error'),
	};

	/* Input handlers */
	const onChangeFirstName = useCallback(
		(value: string) => {
			dispatch(profileActions.setFirstName(value));
		},
		[dispatch],
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			dispatch(profileActions.setLastName(value));
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value: string) => {
			dispatch(profileActions.setAge(Number(value)));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(profileActions.setUsername(value));
		},
		[dispatch],
	);

	const onChangeAvatar = useCallback(
		(value: string) => {
			dispatch(profileActions.setAvatar(value));
		},
		[dispatch],
	);

	const onChangeCurrency = useCallback(
		(value: string) => {
			dispatch(profileActions.setCurrency(value as Currency));
		},
		[dispatch],
	);

	const onChangeCountry = useCallback(
		(value: string) => {
			dispatch(profileActions.setCountry(value as Country));
		},
		[dispatch],
	);

	return (
		<div className={cn(styles.EditableProfileCard)} data-testid='EditableProfileCard'>
			<EditableProfileCardHeader profile={profile} updateHandler={updateHandler} />

			{validateErrors &&
				validateErrors.length > 0 &&
				validateErrors.map((err) => (
					<Text
						data-testid='EditableProfileCard.ValidationError'
						key={err}
						theme={ThemeText.ERROR}
						text={ValidateErrorsTranslated[err]}
					/>
				))}

			<ProfileCard
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
				onChangeAge={onChangeAge}
				onChangeAvatar={onChangeAvatar}
				onChangeUsername={onChangeUsername}
				onChangeCurrency={onChangeCurrency}
				onChangeCountry={onChangeCountry}
				data={formData}
				isLoading={isLoading}
				error={error}
				readOnly={readOnly}
			/>
		</div>
	);
});

EditableProfileCard.displayName = 'EditableProfileCard';
