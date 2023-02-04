import React from 'react'
import Header from './Header'
import Blogs from './Blogs'
import Footer from './Footer'
import { useTheme } from '../ThemeContext'

const Content = () => {
    const darkTheme   = useTheme()
  
    const themeStyles = {
      backgroundColor : darkTheme ? '#333' : '#fff',
      color           : darkTheme ? '#fff' : '#333',
    }

  return (
    <div style={themeStyles}>
        <Header />
        <Blogs className="flex flex-direction-col align-items-center "/>
        <Footer />
  </div>
  )
}

export default Content