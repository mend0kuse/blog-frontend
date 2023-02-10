export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	ERROR = 'ERROR',
}

export const RouterPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.ERROR]: '*',
};
