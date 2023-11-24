import { type RouteProps } from 'react-router-dom';

import { type UserRole } from '@/entities/User';
import { AdminPanelPage } from '@/pages/adminPanel';
import { ArticleDetailsPage } from '@/pages/articleDetails';
import { ArticleNew } from '@/pages/articleNew';
import { ArticlesPage } from '@/pages/articles';
import { ForbiddenPage } from '@/pages/forbidden';
import { PageNotFound } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { AppRoutes, getArticlePageRoute, getProfilePageRoute } from '@/shared/config/routes/routes';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	allowRoles?: UserRole[];
};

export const routeConfig: Partial<Record<AppRoutes, AppRoutesProps>> = {
	[AppRoutes.ERROR]: {
		path: AppRoutes.ERROR,
		element: <PageNotFound />,
	},
	[AppRoutes.PROFILE]: {
		path: getProfilePageRoute(':id'),
		element: <ProfilePage />,
	},
	[AppRoutes.ARTICLES]: {
		path: AppRoutes.MAIN,
		element: <ArticlesPage />,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getArticlePageRoute(':id'),
		element: <ArticleDetailsPage />,
	},
	[AppRoutes.ARTICLE_NEW]: {
		path: AppRoutes.ARTICLE_NEW,
		element: <ArticleNew />,
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: AppRoutes.ADMIN_PANEL,
		element: <AdminPanelPage />,
		authOnly: true,
		allowRoles: ['admin'],
	},
	[AppRoutes.FORBIDDEN]: {
		path: AppRoutes.FORBIDDEN,
		element: <ForbiddenPage />,
	},
};
