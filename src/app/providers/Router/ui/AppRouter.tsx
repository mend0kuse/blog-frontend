import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';

import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route path={path} key={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};
