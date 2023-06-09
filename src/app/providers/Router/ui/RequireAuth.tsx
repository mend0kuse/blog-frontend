import { type UserRole, getUserAuthData, getUserRoles } from 'enteties/User';
import { RouterPaths } from 'shared/config/routes/routes';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
	children: JSX.Element;
	allowRoles?: UserRole[];
}

export function RequireAuth({ children, allowRoles }: RequireAuthProps) {
	const auth = useSelector(getUserAuthData);
	const userRoles = useSelector(getUserRoles);
	const location = useLocation();

	const hasRequiredRoles: boolean = useMemo(() => {
		if (!allowRoles) {
			return true;
		}
		return allowRoles.some((role) => userRoles?.includes(role));
	}, [allowRoles, userRoles]);

	if (!auth) {
		return <Navigate to={RouterPaths.main} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={RouterPaths.forbidden} state={{ from: location }} replace />;
	}

	return children;
}
