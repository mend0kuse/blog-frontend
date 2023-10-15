import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { type Profile } from '@/entities/Profile';
import { getUserAuthData } from '@/entities/User';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
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
		if (profile) {
			dispatch(profileActions.cancelEdit(profile));
		}
	}, [dispatch, profile]);

	const onSaveEdit = useCallback(() => {
		if (formData) {
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
							<Button theme={ThemeButton.OUTLINE} onClick={onEdit} data-testid='EditableProfileCard.Edit'>
								{t('Edit')}
							</Button>
						) : (
							<HStack gap='8'>
								<Button
									theme={ThemeButton.OUTLINE_ERR}
									data-testid='EditableProfileCard.Cancel'
									onClick={onCancelEdit}
								>
									{t('Cancel')}
								</Button>
								<Button
									theme={ThemeButton.OUTLINE}
									data-testid='EditableProfileCard.Save'
									onClick={onSaveEdit}
								>
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
