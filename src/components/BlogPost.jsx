import { useTheme } from '../ThemeContext'
import NotFound from './NotFound'
import { useState, useEffect } from 'react'

const BlogPost = ({ blogs, id, setSelectedId }) => {
	const darkTheme = useTheme()
	const [isVisible, setIsVisible] = useState(true)
	
	// useEffect(() => {
	// 	setIsVisible((v) => !v)
	// }, [])

	const themeStyles = {
		backgroundColor: darkTheme ? '#23272f' : '#fff',
		color: darkTheme ? '#fff' : '#23272f',
		transition: 'background-color .5s ease',
	}

	const filteredBlog = blogs.find((blog) => blog.id === parseInt(id))
	if (!filteredBlog) {
		return <NotFound />
	}
	return (
		<div style={themeStyles} className={`${isVisible ? 'slide-in-right' : ''}`}>
			<div className="blog-post-header flex">
				<h1>{filteredBlog.title}</h1>
				<i
					className="fa-duotone fa-circle-xmark xcircle-icon fa-lg"
					onClick={() => {
						setSelectedId(-1)
						setIsVisible(false)
					}}
				></i>
			</div>
			<br />
			<p className="light-font-weight">{filteredBlog.description}</p>
		</div>
	)
}

export default BlogPost
