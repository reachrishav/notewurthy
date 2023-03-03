import './App.css'
import Content from './components/Content'
import { ThemeProvider } from './ThemeContext'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [blogs, setBlogs] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchBlogs = async () => {
		  const res = await axios.get("https://notewurthy-admin.netlify.app/api/fetchBlogs");
		  setBlogs(res.data);
		  setIsLoading(false)
		};
		fetchBlogs();
	  }, []);

	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<Content blogs={blogs} isLoading={isLoading} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
