import { getProfileEdit } from 'enteties/Profile/model/selectors/getProfileEdit/getProfileEdit';
import { getProfileError } from 'enteties/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'enteties/Profile/model/selectors/getProfileLoading/getProfileLoading';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
	const { t } = useTranslation('profile');

	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileLoading);
	const edit = useSelector(getProfileEdit);

	return (
		<div className={cn(styles.ProfileCard)}>
			<div className={styles.header}>
				<Text title={t('Profile Page')} />
				<Button theme={ThemeButton.OUTLINE}>{t('Edit')}</Button>
			</div>
			{data && (
				<div className={styles.ProfileData}>
					<Input value={data.first} placeholder='Ваше имя' />
					<Input value={data.lastname} placeholder='Ваше фамилия' />
				</div>
			)}
		</div>
	);
};
