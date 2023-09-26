import { Suspense } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { useInitUser } from './model';
import { AppRouter } from './providers/Router';
import './styles/index.scss';

const App = () => {
	const { isFetching, _init } = useInitUser();

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
