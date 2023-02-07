import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AppRouter } from 'app/providers/Router'
import { useTheme } from 'shared/config/themes/useTheme'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', {}, theme)}>
			<Navbar />
			<div className='content'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
