import { Link } from 'react-router-dom'
import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AppRouter } from 'app/providers/Router'
import { useTheme } from 'shared/config/themes/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', { 'asd': true, 'zxc': 1 === 1, 'qwe': false }, 'any', theme)}>
			<Link to='/about'>about</Link>
			<Link to='/'>main</Link>
			<button onClick={toggleTheme}>toggle theme</button>
			<AppRouter />
		</div>
	)
}

export default App