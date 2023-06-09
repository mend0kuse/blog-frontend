import { PageLoader } from 'widgets/PageLoader';

import { type FC, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { type AppRoutesProps, routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const { authOnly, element, path, allowRoles } = route;

		const el = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

		return (
			<Route
				path={path}
				key={path}
				element={authOnly || allowRoles ? <RequireAuth allowRoles={allowRoles}>{el}</RequireAuth> : el}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
