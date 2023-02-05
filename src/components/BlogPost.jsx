import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"

const BlogPost = ({ blogs }) => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
  }

  const { id } = useParams()
  const filteredBlog = blogs.find((blog) => blog.id === parseInt(id))
  return (
    <div class='blog-post' style={themeStyles}>
      <Header />
      {filteredBlog.title}
      <br />
      {filteredBlog.description}
      <Footer />
    </div>
  )
}

export default BlogPost
