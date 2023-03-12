import { useAppDispatch } from 'app/providers/StoreProvider';
import { ProfileCard, fetchProfileData, profileReducer } from 'enteties/Profile';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';

import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage: FC = () => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<div className='page-wrapper'>
			<ProfileCard />
		</div>
	);
};

export default ProfilePage;
