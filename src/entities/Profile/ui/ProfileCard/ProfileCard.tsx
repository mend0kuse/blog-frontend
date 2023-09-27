import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Country, CountrySelect } from '@/entities/Country';
import { type Currency, CurrencySelect } from '@/entities/Currency';
import cn, { type Mods } from '@/shared/lib/classNames/cn';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text, ThemeText } from '@/shared/ui/Text';
import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { type Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile | null;
	isLoading?: boolean;
	error?: FetchBaseQueryError | SerializedError;
	readOnly?: boolean;

	// handlers
	onChangeLastName?: (val: string) => void;
	onChangeFirstName?: (val: string) => void;
	onChangeAge?: (val: string) => void;
	onChangeUsername?: (val: string) => void;
	onChangeAvatar?: (val: string) => void;
	onChangeCurrency: (val: Currency) => void;
	onChangeCountry: (val: Country) => void;
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
		if ('status' in error) {
			// you can access all properties of `FetchBaseQueryError` here
			const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

			return (
				<div className={cn(styles.ProfileCard, {}, className)}>
					<Text title={t(errMsg)} theme={ThemeText.ERROR} />
				</div>
			);
		} else {
			// you can access all properties of `SerializedError` here
			return (
				<div className={cn(styles.ProfileCard, {}, className)}>
					<Text title={t(error.message || 'Error happend')} theme={ThemeText.ERROR} />
				</div>
			);
		}
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
						value={data?.name ?? ''}
						readOnly={readOnly}
						onChange={onChangeFirstName}
						placeholder={t('Your name')}
						data-testid='ProfileCard.first'
					/>
					<Input
						value={data?.surname ?? ''}
						readOnly={readOnly}
						onChange={onChangeLastName}
						placeholder={t('Your surname')}
					/>
					<Input value={data?.age} readOnly={readOnly} onChange={onChangeAge} placeholder={t('Your age')} />
					<Input
						value={data?.username ?? ''}
						readOnly={readOnly}
						onChange={onChangeUsername}
						placeholder={t('Your username')}
					/>
					<Input
						value={data?.avatar ?? ''}
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
