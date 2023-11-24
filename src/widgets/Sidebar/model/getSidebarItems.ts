import { getUserAuthData } from '@/entities/User';
import ArticlesIcon from '@/shared/assets/icons/arcticles.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { AppRoutes, getProfilePageRoute } from '@/shared/config/routes/routes';
import { createSelector } from '@reduxjs/toolkit';

import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: AppRoutes.MAIN,
			Icon: ArticlesIcon,
			text: 'Articles',
		},
	];

	if (authData) {
		sidebarItemsList.push({
			path: getProfilePageRoute(authData.id),
			Icon: ProfileIcon,
			text: 'Profile Page',
			authOnly: true,
		});
	}

	return sidebarItemsList;
});
