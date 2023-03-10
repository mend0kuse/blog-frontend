import { profileReducer } from 'enteties/Profile';
import {
	type ReducersList,
	useDinamycModuleLoader,
} from 'shared/hooks/useDinamycModuleLoader';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage: FC = () => {
	const { t } = useTranslation('profile');

	useDinamycModuleLoader(reducers);

	return <div className='page-wrapper'>{t('Profile Page')}</div>;
};

export default ProfilePage;
