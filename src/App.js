import './App.css'
import Content from './components/Content'
import { ThemeProvider } from './ThemeContext'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'
import { Blogs } from '../src/BlogStore'

function App() {
	const [blogs, setBlogs] = useState(Blogs)

	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<Content blogs={blogs} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
