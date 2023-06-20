import { type RouteProps } from 'react-router-dom';

import { type UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/about';
import { AdminPanelPage } from '@/pages/adminPanel';
import { ArticleDetailsPage } from '@/pages/articleDetails';
import { ArticleEdit } from '@/pages/articleEdit';
import { ArticleNew } from '@/pages/articleNew';
import { ArticlesPage } from '@/pages/articles';
import { ForbiddenPage } from '@/pages/forbidden';
import { MainPage } from '@/pages/main';
import { PageNotFound } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { AppRoutes, getArticlePageRoute, getEditPageRoute, getProfilePageRoute } from '@/shared/config/routes/routes';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	allowRoles?: UserRole[];
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: AppRoutes.MAIN,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: AppRoutes.ABOUT,
		element: <AboutPage />,
	},
	[AppRoutes.ERROR]: {
		path: AppRoutes.ERROR,
		element: <PageNotFound />,
	},
	[AppRoutes.PROFILE]: {
		path: getProfilePageRoute(':id'),
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: AppRoutes.ARTICLES,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getArticlePageRoute(':id'),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_NEW]: {
		path: AppRoutes.ARTICLE_NEW,
		element: <ArticleNew />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: getEditPageRoute(':id'),
		element: <ArticleEdit />,
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: AppRoutes.ADMIN_PANEL,
		element: <AdminPanelPage />,
		authOnly: true,
		allowRoles: ['Admin'],
	},
	[AppRoutes.FORBIDDEN]: {
		path: AppRoutes.FORBIDDEN,
		element: <ForbiddenPage />,
	},
};
