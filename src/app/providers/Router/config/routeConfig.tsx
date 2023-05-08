import { AboutPage } from 'pages/about';
import { ArticleDetailsPage } from 'pages/articleDetails';
import { ArticlesPage } from 'pages/articles';
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
		path: RouterPaths[AppRoutes.PROFILE] + ':id',
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RouterPaths[AppRoutes.ARTICLES],
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: RouterPaths[AppRoutes.ARTICLE_DETAILS] + ':id',
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
};
