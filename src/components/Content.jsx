import React from "react"
import Header from "./Header"
import Blogs from "./Blogs"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"

const Content = ({blogs}) => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
  }

  return (
    <div style={themeStyles}>
      <Header />
      <Blogs className='flex flex-direction-col align-items-center' blogs={blogs}/>
      <Footer />
    </div>
  )
}

export default Content
