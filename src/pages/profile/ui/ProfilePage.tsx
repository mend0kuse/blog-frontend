import { useAppDispatch } from 'app/providers/StoreProvider';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';

import { type FC, useEffect } from 'react';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage: FC = () => {
	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	useEffect(() => {
		if (_PROJECT_ !== 'storybook') {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	return <EditableProfileCard />;
};

export default ProfilePage;
