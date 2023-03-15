import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { PageNotFound } from 'pages/notFound';
import { ProfilePage } from 'pages/profile';
import { AppRoutes, RouterPaths } from 'shared/config/routes/routes';

import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPaths[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RouterPaths[AppRoutes.ABOUT],
		element: <AboutPage />,
	},
	[AppRoutes.ERROR]: {
		path: RouterPaths[AppRoutes.ERROR],
		element: <PageNotFound />,
	},
	[AppRoutes.PROFILE]: {
		path: RouterPaths[AppRoutes.PROFILE],
		element: <ProfilePage />,
		authOnly: true,
	},
};
