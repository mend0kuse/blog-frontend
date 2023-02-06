import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RouterPaths } from "shared/config/routes/routes";

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPaths[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RouterPaths[AppRoutes.ABOUT],
		element: <AboutPage />
	}
}