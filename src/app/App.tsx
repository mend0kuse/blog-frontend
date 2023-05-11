import { AppRouter } from 'app/providers/Router';
import { userActions } from 'enteties/User';
import { getUserInit } from 'enteties/User/model/selectors/getUserInit';
import cn from 'shared/lib/classNames/cn';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles/';

const App = () => {
	const dispath = useDispatch();

	useEffect(() => {
		dispath(userActions.initAuthData());
	}, [dispath]);

	const _init = useSelector(getUserInit);

	return (
		<div className={cn('app', {})}>
			<Suspense fallback={<Loader />}>
				<Navbar />
				{_init && (
					<div className='content'>
						<Sidebar />
						<AppRouter />
					</div>
				)}
			</Suspense>
		</div>
	);
};

export default App;
