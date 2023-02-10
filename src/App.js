import "./App.css"
import Content from "./components/Content"
import { ThemeProvider } from "./ThemeContext"
import { Routes, Route } from "react-router-dom"
import BlogPost from "./components/BlogPost"
import NotFound from "./components/NotFound"
import { useEffect, useState } from "react"

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Designing in the Build',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
      datePublished: 'FEB 02, 2023'
    },
    {
      id: 2,
      title: 'Second Blog',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
      datePublished: 'FEB 02, 2023'
    },
    {
      id: 3,
      title: 'Third Blog',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
      datePublished: 'FEB 02, 2023'
    },
    {
      id: 4,
      title: 'Fourth Blog',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
      datePublished: 'FEB 02, 2023'
    }
  ])

  useEffect(() => {
  }, [blogs])
  
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Content blogs={blogs} />} />
        {/* <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
