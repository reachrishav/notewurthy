import "./App.css"
import Content from "./components/Content"
import { ThemeProvider } from "./ThemeContext"
import { Routes, Route } from "react-router-dom"
import BlogPost from "./components/BlogPost"
import NotFound from "./components/NotFound"

function App() {
  return (
    <ThemeProvider>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </ThemeProvider>
  )
}

export default App
