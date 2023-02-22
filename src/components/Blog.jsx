import { motion } from 'framer-motion'

const Blog = ({ blog, setSelectedId }) => {
	return (
		<div className="blog">
			<div className="light-font-weight date-font light-text-color">
				{blog.datePublished}
			</div>
			<div>
				<button
					onClick={() => setSelectedId(blog.id)}
					className="no-txt-decor black blue-on-hover blog-link"
				>
					<h2 className="medium-font-weight">{blog.title}</h2>
				</button>
			</div>
			<div className="light-font-weight light-text-color">
				{blog.description.split(' ').slice(0, 50).join(' ') + '...'}
			</div>
			<motion.button
				onClick={() => setSelectedId(blog.id)}
				className="btn-read-more btn-light"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Read More
			</motion.button>
		</div>
	)
}

export default Blog
