import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/about/AboutPage.lazy'
import { MainPageLazy } from './pages/main/MainPage.lazy'
import './styles/'
import { useTheme } from './themes/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<Link to='/about'>about</Link>
			<Link to='/'>main</Link>
			<button onClick={toggleTheme}>toggle theme</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPageLazy />} />
					<Route path='/' element={<MainPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App