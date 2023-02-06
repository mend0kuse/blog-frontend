import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import cn from 'shared/lib/classNames/cn'
import './styles/'
import { AboutPage } from 'pages/about'
import { MainPage } from 'pages/main'
import { useTheme } from 'shared/config/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', { 'asd': true, 'zxc': 1 === 1, 'qwe': false }, 'any', theme)}>
			<Link to='/about'>about</Link>
			<Link to='/'>main</Link>
			<button onClick={toggleTheme}>toggle theme</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App