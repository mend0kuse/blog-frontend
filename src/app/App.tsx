import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AppRouter } from 'app/providers/Router'
import { useTheme } from 'shared/config/themes/useTheme'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
	const { theme } = useTheme()


	return (
		<div className={cn('app', {}, theme)}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
