import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RouterPaths } from 'shared/config/routes/routes';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
	{
		path: RouterPaths.profile,
		Icon: ProfileIcon,
		text: 'Profile Page',
		authOnly: true,
	},
];
