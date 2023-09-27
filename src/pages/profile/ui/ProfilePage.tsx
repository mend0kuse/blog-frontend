import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { type Profile } from '@/entities/Profile';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';

import { useGetProfileQuery, useUpdateProfileMutation } from '../api/profileApi';

const ProfilePage = () => {
	const { id } = useParams<{ id: string }>();

	const { error, isLoading, data: user, refetch: refetchProfile } = useGetProfileQuery({ id: id ?? '' });

	const [updateProfile] = useUpdateProfileMutation();

	const updateHandler = useCallback(
		(formData: Profile) => {
			updateProfile({ formData });
			refetchProfile();
		},
		[refetchProfile, updateProfile],
	);

	return (
		<Page>
			<EditableProfileCard
				updateHandler={updateHandler}
				error={error}
				isLoading={isLoading}
				profile={user?.profile}
			/>
		</Page>
	);
};

export default ProfilePage;
