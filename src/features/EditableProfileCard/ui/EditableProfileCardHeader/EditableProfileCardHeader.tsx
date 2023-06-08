import { useAppDispatch } from 'app/providers/StoreProvider';
import { type Profile } from 'enteties/Profile';
import { getUserAuthData } from 'enteties/User';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { validateProfileData } from '../../model/services/validateProfileData/validateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import styles from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
	className?: string;
	updateHandler: (formData: Profile) => void;
	profile?: Profile;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((props) => {
	const { updateHandler, profile } = props;
	const { t } = useTranslation('profile');

	const authData = useSelector(getUserAuthData);
	const formData = useSelector(getProfileFormData);
	const readOnly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();

	const canEdit = formData?.id === authData?.id;

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		console.log(profile);

		if (profile) {
			dispatch(profileActions.cancelEdit(profile));
		}
	}, [dispatch, profile]);

	const onSaveEdit = useCallback(() => {
		const errors = validateProfileData(formData);
		dispatch(profileActions.setValidateErrors(errors));

		if (errors.length === 0 && formData) {
			updateHandler(formData);
			dispatch(profileActions.setReadonly(true));
		}
	}, [dispatch, formData, updateHandler]);

	return (
		<HStack align='center' justify='between' className={styles.header}>
			<Text title={t('Profile Page')} />
			<>
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
			</>
		</HStack>
	);
});

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';
