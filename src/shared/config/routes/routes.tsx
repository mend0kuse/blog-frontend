export enum AppRoutes {
	MAIN = '/',
	ABOUT = '/about',
	ARTICLES = '/articles',
	ARTICLE_NEW = '/articles/new',
	ADMIN_PANEL = '/admin',
	FORBIDDEN = '/forbidden',

	// dinamyc
	PROFILE = '/profile/',
	ARTICLE_DETAILS = '/articles/',
	ARTICLE_EDIT = '/articles/edit',

	// error
	ERROR = '*',
}

export const getProfilePageRoute = (id: string) => AppRoutes.PROFILE + id;
export const getArticlePageRoute = (id: string) => `${AppRoutes.ARTICLE_DETAILS}/${id}`;
export const getEditPageRoute = (id: string) => `${AppRoutes.ARTICLE_EDIT}/${id}`;
