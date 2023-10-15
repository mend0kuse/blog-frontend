import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleList, ArticleView } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import { type Profile } from '@/entities/Profile';
import { useGetUserByIdQuery, useUpdateProfileMutation } from '@/entities/User';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { getErrorString } from '@/shared/api/getError';
import { Text, ThemeText } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
	const { id } = useParams<{ id: string }>();

	const { t } = useTranslation('profile');

	const { error, isLoading, data: user } = useGetUserByIdQuery(id ?? '');

	const [updateProfile, { error: updateError }] = useUpdateProfileMutation();

	const updateHandler = useCallback(
		(formData: Profile) => {
			updateProfile({ formData });
		},
		[updateProfile],
	);

	if (error) {
		return <Text theme={ThemeText.ERROR} title={t(getErrorString(error))} />;
	}

	return (
		<Page className={styles.wrapper}>
			<EditableProfileCard
				updateHandler={updateHandler}
				isLoading={isLoading}
				profile={user?.profile}
				validateError={getErrorString(updateError)}
			/>
			<CommentList withArticleLink comments={user?.Comment?.slice(0, 3)} isLoading={isLoading} />
			<div className={styles.articles}>
				<Text title={t('Articles')} />
				<ArticleList isLoading={isLoading} articles={user?.Article} view={ArticleView.LIST} />
			</div>
		</Page>
	);
};

export default ProfilePage;
