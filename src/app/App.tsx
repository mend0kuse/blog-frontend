import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AppRouter } from 'app/providers/Router'
import { useTheme } from 'shared/config/themes/useTheme'
import { Navbar } from 'widgets/Navbar'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, theme)}>
			<Navbar />
			<button onClick={toggleTheme}>toggle theme</button>
			<AppRouter />
		</div>
	)
}

export default App
