import { useTheme } from "../ThemeContext"
import NotFound from "./NotFound"
import { useState, useEffect } from "react"
import { motion, useAnimation, useCycle, AnimatePresence } from "framer-motion"

const BlogPost = ({ blogs, id, setSelectedId }) => {
  const darkTheme = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [animationState, cycleAnimation] = useCycle(
    "initialState",
    "targetState"
  )
  const controls = useAnimation()

  const handleClick = async () => {
    await controls.start(animationState)
    cycleAnimation()
  }

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
    <AnimatePresence>
      <motion.div
        style={themeStyles}
        className='blog-post-container  blog-post-font'
        initial={{ opacity: 0, x: "150vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        key={id}
        // animate={controls}
        // variants={{
        // 	initialState: { x: 0 },
        // 	targetState: { opacity: 0 },
        // }}
        // transition={{ duration: 0.2 }}
      >
        <div className='blog-post-inner-container'>
          <div className='blog-post-header flex'>
            <h1 className='blog-post-font'>{filteredBlog.title}</h1>
            <motion.i
              className='fa-duotone fa-circle-xmark xcircle-icon fa-lg'
              onClick={() => {
                setSelectedId(-1)
                setIsVisible(false)
              }}
              // onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.i>
          </div>
          <br />
          <p className='light-font-weight blog-post-font'>
            {filteredBlog.description}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BlogPost
