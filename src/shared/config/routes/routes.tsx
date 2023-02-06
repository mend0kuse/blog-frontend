export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RouterPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
}