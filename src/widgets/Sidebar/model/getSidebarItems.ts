import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/arcticles.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { AppRoutes, getProfilePageRoute } from '@/shared/config/routes/routes';
import { createSelector } from '@reduxjs/toolkit';

import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: AppRoutes.MAIN,
			Icon: MainIcon,
			text: 'Main',
		},
		{
			path: AppRoutes.ABOUT,
			Icon: AboutIcon,
			text: 'About us',
		},
	];

	if (authData) {
		sidebarItemsList.push(
			{
				path: getProfilePageRoute(authData.id),
				Icon: ProfileIcon,
				text: 'Profile Page',
				authOnly: true,
			},
			{
				path: AppRoutes.ARTICLES,
				Icon: ArticlesIcon,
				text: 'Articles',
				authOnly: true,
			},
		);
	}

	return sidebarItemsList;
});
