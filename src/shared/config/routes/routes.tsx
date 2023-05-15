export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',
	ARTICLE_NEW = 'article_new',
	ARTICLE_EDIT = 'article_edit',

	//
	ERROR = 'ERROR',
}

export const RouterPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',
	[AppRoutes.ARTICLE_NEW]: '/articles/new',
	[AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',

	//
	[AppRoutes.ERROR]: '*',
};
