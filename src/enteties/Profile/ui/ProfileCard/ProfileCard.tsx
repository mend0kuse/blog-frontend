import { CountrySelect } from 'enteties/Country';
import { CurrencySelect } from 'enteties/Currency';
import cn, { type Mods } from 'shared/lib/classNames/cn';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile | null;
	isLoading?: boolean;
	error?: string;
	readOnly?: boolean;

	// handlers
	onChangeLastName?: (val: string) => void;
	onChangeFirstName?: (val: string) => void;
	onChangeAge?: (val: string) => void;
	onChangeUsername?: (val: string) => void;
	onChangeAvatar?: (val: string) => void;
	onChangeCurrency?: (val: string) => void;
	onChangeCountry?: (val: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
	const {
		className,
		data,
		isLoading,
		error,
		readOnly,
		onChangeFirstName,
		onChangeUsername,
		onChangeLastName,
		onChangeAge,
		onChangeAvatar,
		onChangeCountry,
		onChangeCurrency,
	} = props;

	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<div className={cn(styles.ProfileCard, {}, className)}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={cn(styles.ProfileCard, {}, className)}>
				<Text title={t(error)} theme={ThemeText.ERROR} />
			</div>
		);
	}

	const mods: Mods = {
		[styles.editable]: !readOnly,
	};

	return (
		<div className={cn(styles.ProfileCard, mods, className)}>
			{data && (
				<div className={styles.ProfileData}>
					<Avatar className={styles.avatar} alt='avatar' src={data?.avatar} size={100} />
					<Input
						value={data?.first}
						readOnly={readOnly}
						onChange={onChangeFirstName}
						placeholder={t('Your name')}
					/>
					<Input
						value={data?.lastname}
						readOnly={readOnly}
						onChange={onChangeLastName}
						placeholder={t('Your surname')}
					/>
					<Input
						type='number'
						value={data?.age}
						readOnly={readOnly}
						onChange={onChangeAge}
						placeholder={t('Your age')}
					/>
					<Input
						value={data?.username}
						readOnly={readOnly}
						onChange={onChangeUsername}
						placeholder={t('Your username')}
					/>
					<Input
						value={data?.avatar}
						readOnly={readOnly}
						onChange={onChangeAvatar}
						placeholder={t('Your avatar')}
					/>
					<CurrencySelect value={data?.currency} onChange={onChangeCurrency} disabled={readOnly} />
					<CountrySelect value={data?.country} onChange={onChangeCountry} disabled={readOnly} />
				</div>
			)}
		</div>
	);
};
