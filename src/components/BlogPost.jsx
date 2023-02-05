import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"


const BlogPost = () => {
    const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
  }
    const blogs = [
        {
            id: 1,
            title: 'Designing in the Build',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: 'FEB 02, 2023'
        },
        {
            id: 2,
            title: 'Second Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: 'FEB 02, 2023'
        },
        {
            id: 3,
            title: 'Third Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: 'FEB 02, 2023'
        },
        {
            id: 4,
            title: 'Fourth Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: 'FEB 02, 2023'
        }
    ]
  const { id } = useParams()
  const filteredBlog = blogs.find(blog => blog.id === parseInt(id))
  return <div style={themeStyles}>
    <Header />
    {filteredBlog.title}
    <br/>
    {filteredBlog.description}
    <Footer />
    </div>
}

export default BlogPost
