import Header from "./Header"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"

const NotFound = () => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#23272f" : "#fff",
    color: darkTheme ? "#fff" : "#23272f",
  }
  return (
    <div class='full-vh' style={themeStyles}>
      <Header />
      <div>NotFound</div>
      <Footer />
    </div>
  )
}

export default NotFound
