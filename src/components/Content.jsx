import React, { useEffect } from "react"
import Header from "./Header"
import Blogs from "./Blogs"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"
import BlogPost from './BlogPost'

const Content = ({ blogs }) => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
    transition: "background-color .5s ease"
  }

  useEffect(() => {
    darkTheme
      ? document
        .querySelectorAll(".black")
        .forEach(element => element.classList.add("white"))
      : document
        .querySelectorAll(".white")
        .forEach(element => element.classList.remove("white"))
  }, [darkTheme])

  return (
    <div style={themeStyles}>
      <Header />
      <div id='blog-section' className='grid'>
        <Blogs className='ml-2-5em flex flex-direction-col' blogs={blogs} />
        <div>
          <BlogPost blogs={blogs} id={1} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Content
