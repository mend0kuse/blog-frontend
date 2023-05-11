import { useAppDispatch } from 'app/providers/StoreProvider';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import { Page } from 'widgets/Page/Page';

import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage: FC = () => {
	const dispatch = useAppDispatch();

	const { id } = useParams<{ id: string }>();

	useDinamycModuleLoader(reducers);

	useInititalEffect(() => {
		dispatch(fetchProfileData(id));
	});

	return (
		<Page>
			<EditableProfileCard />
		</Page>
	);
};

export default ProfilePage;
