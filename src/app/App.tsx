import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AppRouter } from 'app/providers/Router'
import { useTheme } from 'shared/config/themes/useTheme'
import { Navbar } from 'widgets/Navbar'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', {}, theme)}>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
