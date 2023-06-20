import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInit, userActions } from '@/entities/User';
import cn from '@/shared/lib/classNames/cn';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/Router';
import './styles/index.scss';

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
					<HStack>
						<Sidebar />
						<AppRouter />
					</HStack>
				)}
			</Suspense>
		</div>
	);
};

export default App;
