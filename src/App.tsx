import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/about/AboutPage.lazy'
import { MainPageLazy } from './pages/main/MainPage.lazy'

const App = () => {
	return (
		<div className='app'>
			<Link to='/about'>about</Link>
			<Link to='/'>main</Link>

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