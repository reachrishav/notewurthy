import { motion } from "framer-motion"
import { useTheme } from "../ThemeContext"

const Blog = ({ blog, setSelectedId }) => {
  const darkTheme = useTheme()
  return (
    <div className='blog'>
      <div className='light-font-weight date-font light-text-color'>
        {blog.datePublished}
      </div>
      <div>
        <button
          onClick={() => setSelectedId(blog.id)}
          className='no-txt-decor black blue-on-hover blog-link'
        >
          <h2 className='blog-list-title medium-font-weight'>{blog.title}</h2>
        </button>
      </div>
      <div className='light-font-weight light-text-color'>
        <p className='blog-list-description'>
          {blog.description.split(" ").slice(0, 25).join(" ") + "..."}
        </p>
      </div>
      <motion.button
        onClick={() => setSelectedId(blog.id)}
        className={`btn-read-more btn-light ${darkTheme ? "btn-dark" : ""}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.button>
    </div>
  )
}

export default Blog
