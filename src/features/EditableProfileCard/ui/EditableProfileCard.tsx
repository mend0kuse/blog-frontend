import { useAppDispatch } from 'app/providers/StoreProvider';
import { type Country } from 'enteties/Country';
import { type Currency } from 'enteties/Currency';
import { ProfileCard } from 'enteties/Profile';
import { getUserAuthData } from 'enteties/User';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { changeProfileData } from '../model/services/changeProfileData/changeProfileData';
import { profileActions } from '../model/slice/profileSlice';
import { ValidateProfileError } from '../model/types/editableProfile';
import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
	className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo(({ className }) => {
	const { t } = useTranslation('profile');

	const dispatch = useAppDispatch();

	const isLoading = useSelector(getProfileLoading);
	const formData = useSelector(getProfileFormData);
	const authData = useSelector(getUserAuthData);

	const canEdit = formData?.id === authData?.id;

	const error = useSelector(getProfileError);
	const readOnly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const { id } = useParams<{ id: string }>();

	const ValidateErrorsTranslated = {
		[ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
		[ValidateProfileError.SERVER_ERROR]: t('Server error'),
	};

	/* buttons handlers */
	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSaveEdit = useCallback(() => {
		dispatch(changeProfileData(id));
	}, [dispatch, id]);

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
		<div className={cn(styles.EditableProfileCard)}>
			<HStack align='center' justify='between' className={styles.header}>
				<Text title={t('Profile Page')} />
				{canEdit && (
					<>
						{readOnly ? (
							<Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
								{t('Edit')}
							</Button>
						) : (
							<HStack gap='8'>
								<Button theme={ThemeButton.OUTLINE_ERR} onClick={onCancelEdit}>
									{t('Cancel')}
								</Button>
								<Button theme={ThemeButton.OUTLINE} onClick={onSaveEdit}>
									{t('Save')}
								</Button>
							</HStack>
						)}
					</>
				)}
			</HStack>

			{validateErrors &&
				validateErrors.length > 0 &&
				validateErrors.map((err) => (
					<Text key={err} theme={ThemeText.ERROR} text={ValidateErrorsTranslated[err]} />
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
