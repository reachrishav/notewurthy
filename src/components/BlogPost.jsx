import { useTheme } from "../ThemeContext"
import NotFound from "./NotFound"
import { motion } from "framer-motion"

const BlogPost = ({ blogs, id, setSelectedId }) => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#343a46" : "#ECF2FF",
    color: darkTheme ? "#ebecf0" : "#23272f",
    transition: "background-color .5s ease",
    boxShadow: "0 1px 7px 0 rgba(0,0,0,.6)",
  }

  const filteredBlog = blogs.find(blog => blog.id === id)
  if (!filteredBlog) {
    return <NotFound />
  }
  return (
    <motion.div
      style={themeStyles}
      className='blog-post-container  blog-post-font'
      initial={{ opacity: 0, x: "150vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      key={id}
    >
      <div className='blog-post-inner-container flex flex-direction-col'>
        <motion.i
          className='fa-regular fa-circle-xmark xcircle-icon fa-lg position-fixed mt-10'
          // <i class="fa-duotone fa-circle-xmark"></i>
          onClick={() => {
            setSelectedId(-1)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ zIndex: 1, right: "1.35rem" }}
        ></motion.i>
        <div className='blog-post-header flex'>
          <h1
            className='blog-post-font word-wrap-anywhere'
            style={{ fontWeight: "600" }}
          >
            {filteredBlog.title}
          </h1>
        </div>
        <br />
        <p
          className='blog-post-font'
          style={{ fontWeight: "200", fontSize: "0.92rem" }}
        >
          {filteredBlog.description}
        </p>
      </div>
    </motion.div>
  )
}

export default BlogPost
