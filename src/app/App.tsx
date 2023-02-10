import { AppRouter } from 'app/providers/Router';
import { useTheme } from 'shared/config/themes/useTheme';
import cn from 'shared/lib/classNames/cn';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { Suspense } from 'react';

import './styles/';

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={cn('app', {}, theme)}>
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
