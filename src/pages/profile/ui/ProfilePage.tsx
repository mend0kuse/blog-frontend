import { type FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { type Profile } from '@/entities/Profile';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';

import { useGetProfileQuery, useUpdateProfileMutation } from '../api/profileApi';

const ProfilePage: FC = () => {
	const { id } = useParams<{ id: string }>();

	const { error, isLoading, data: profile, refetch: refetchProfile } = useGetProfileQuery(id || '');

	const [updateProfile] = useUpdateProfileMutation();

	const updateHandler = useCallback(
		(formData: Profile) => {
			updateProfile({ id, formData });
			refetchProfile();
		},
		[id, refetchProfile, updateProfile],
	);

	return (
		<Page>
			<EditableProfileCard updateHandler={updateHandler} error={error} isLoading={isLoading} profile={profile} />
		</Page>
	);
};

export default ProfilePage;
