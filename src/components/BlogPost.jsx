import { useTheme } from '../ThemeContext'
import NotFound from './NotFound'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BlogPost = ({ blogs, id, setSelectedId }) => {
	const darkTheme = useTheme()
	const [isVisible, setIsVisible] = useState(true)

	const themeStyles = {
		backgroundColor: darkTheme ? '#343a46' : '#fff',
		color: darkTheme ? '#ebecf0' : '#23272f',
		transition: 'background-color .5s ease',
	}

	const filteredBlog = blogs.find((blog) => blog.id === parseInt(id))
	if (!filteredBlog) {
		return <NotFound />
	}
	return (
		<div style={themeStyles} className="blog-post-container">
			<div className='blog-post-inner-container'>
				<div className="blog-post-header flex">
					<h1>{filteredBlog.title}</h1>
					<motion.i
						className="fa-duotone fa-circle-xmark xcircle-icon fa-lg"
						onClick={() => {
							setSelectedId(-1)
							setIsVisible(false)
						}}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
					></motion.i>
				</div>
				<br />
				<p className="light-font-weight">{filteredBlog.description}</p>
			</div>
		</div>
	)
}

export default BlogPost
