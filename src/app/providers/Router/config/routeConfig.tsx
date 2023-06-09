import { type UserRole } from 'enteties/User';
import { AboutPage } from 'pages/about';
import { AdminPanelPage } from 'pages/adminPanel';
import { ArticleDetailsPage } from 'pages/articleDetails';
import { ArticleEdit } from 'pages/articleEdit';
import { ArticleNew } from 'pages/articleNew';
import { ArticlesPage } from 'pages/articles';
import { ForbiddenPage } from 'pages/forbidden';
import { MainPage } from 'pages/main';
import { PageNotFound } from 'pages/notFound';
import { ProfilePage } from 'pages/profile';
import { AppRoutes, RouterPaths } from 'shared/config/routes/routes';

import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	allowRoles?: UserRole[];
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
	[AppRoutes.ARTICLE_NEW]: {
		path: RouterPaths[AppRoutes.ARTICLE_NEW],
		element: <ArticleNew />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: RouterPaths[AppRoutes.ARTICLE_EDIT],
		element: <ArticleEdit />,
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: RouterPaths[AppRoutes.ADMIN_PANEL],
		element: <AdminPanelPage />,
		authOnly: true,
		allowRoles: ['Admin'],
	},
	[AppRoutes.FORBIDDEN]: {
		path: RouterPaths[AppRoutes.FORBIDDEN],
		element: <ForbiddenPage />,
	},
};
