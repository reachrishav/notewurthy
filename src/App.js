import './App.css'
import Content from './components/Content'
import { ThemeProvider } from './ThemeContext'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'
import { Blogs } from '../src/BlogStore'
import axios from 'axios'

function App() {
	const [blogs, setBlogs] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchBlogs = async () => {
		  const res = await axios.get("https://notewurthy-admin.netlify.app/api/fetchBlogs");
		  setBlogs(res.data);
		  setLoading(true)
		};
		fetchBlogs();
	  }, []);

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
