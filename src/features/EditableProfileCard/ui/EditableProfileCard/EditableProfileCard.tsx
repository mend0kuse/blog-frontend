import { type FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { type Profile, ProfileCard } from '@/entities/Profile';
import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { Text, ThemeText } from '@/shared/ui/Text';

import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
	className?: string;
	profile?: Profile;
	isLoading?: boolean;
	validateError?: string;
	updateHandler: (formData: Profile) => void;
}

const reducers: ReducersList = {
	profile: profileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
	const { profile, updateHandler, isLoading, validateError, className } = props;

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	useEffect(() => {
		if (profile) {
			dispatch(profileActions.setFormData(profile));
		}
	}, [dispatch, profile]);

	const formData = useSelector(getProfileFormData);

	const readOnly = useSelector(getProfileReadonly);

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
			dispatch(profileActions.setAge(value));
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
		<div className={cn(styles.card, className)} data-testid='EditableProfileCard'>
			<EditableProfileCardHeader profile={profile} updateHandler={updateHandler} />
			<Text theme={ThemeText.ERROR} title={validateError} />
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
				readOnly={readOnly}
			/>
		</div>
	);
});

EditableProfileCard.displayName = 'EditableProfileCard';
