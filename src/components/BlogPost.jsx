// import { useParams } from "react-router-dom"
// import Header from "./Header"
// import Footer from "./Footer"
import { useTheme } from "../ThemeContext"
import NotFound from "./NotFound"

const BlogPost = ({ blogs, id }) => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
    transition: "background-color .5s ease"
  }

  // const { id } = useParams()
  const filteredBlog = blogs.find((blog) => blog.id === parseInt(id))
  if(!filteredBlog){
    return <NotFound/>
  }
  return (
    <div style={themeStyles}>

      <h1>{filteredBlog.title}</h1>
      <br />
      <p className="light-font-weight">{filteredBlog.description}</p>
    </div>
  )
}

export default BlogPost
