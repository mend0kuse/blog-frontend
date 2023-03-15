import { getUserAuthData } from 'enteties/User';
import { RouterPaths } from 'shared/config/routes/routes';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	if (!auth) {
		return <Navigate to={RouterPaths.main} state={{ from: location }} replace />;
	}

	return children;
}
