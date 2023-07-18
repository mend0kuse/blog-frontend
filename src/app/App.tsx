import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInit, useLazyGetUserByIdQuery, userActions } from '@/entities/User';
import { USER_KEY } from '@/shared/const/localStorage';
import cn from '@/shared/lib/classNames/cn';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/Router';
import { useAppDispatch } from './providers/StoreProvider';
import './styles/index.scss';

const App = () => {
	const [getUserById, { isFetching }] = useLazyGetUserByIdQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const id = localStorage.getItem(USER_KEY);

		if (id) {
			getUserById(JSON.parse(id));
		}

		dispatch(userActions.setInited());
	}, [dispatch, getUserById]);

	const _init = useSelector(getUserInit);

	if (isFetching) {
		return <Loader />;
	}

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
