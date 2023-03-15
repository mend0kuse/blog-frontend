import { AppRouter } from 'app/providers/Router';
import { userActions } from 'enteties/User';
import cn from 'shared/lib/classNames/cn';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './styles/';

const App = () => {
	const dispath = useDispatch();

	useEffect(() => {
		dispath(userActions.initAuthData());
	}, [dispath]);

	return (
		<div className={cn('app', {})}>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<div className='content'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
