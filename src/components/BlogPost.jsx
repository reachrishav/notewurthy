import { useTheme } from '../ThemeContext'
import NotFound from './NotFound'

const BlogPost = ({ blogs, id }) => {
	const darkTheme = useTheme()

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
		<div style={themeStyles}>
			<div className="blog-post-header flex">
				<h1>{filteredBlog.title}</h1>
				<i className="fa-duotone fa-circle-xmark"></i>
			</div>
			<br />
			<p className="light-font-weight">{filteredBlog.description}</p>
		</div>
	)
}

export default BlogPost
