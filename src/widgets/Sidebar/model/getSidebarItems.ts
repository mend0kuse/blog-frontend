import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/arcticles.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RouterPaths } from '@/shared/config/routes/routes';

import { createSelector } from '@reduxjs/toolkit';

import { type SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from './../../../entities/User/model/selectors/getUserAuthData';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: RouterPaths.main,
			Icon: MainIcon,
			text: 'Main',
		},
		{
			path: RouterPaths.about,
			Icon: AboutIcon,
			text: 'About us',
		},
	];

	if (authData) {
		sidebarItemsList.push(
			{
				path: RouterPaths.profile + authData.id,
				Icon: ProfileIcon,
				text: 'Profile Page',
				authOnly: true,
			},
			{
				path: RouterPaths.articles,
				Icon: ArticlesIcon,
				text: 'Articles',
				authOnly: true,
			},
		);
	}

	return sidebarItemsList;
});
