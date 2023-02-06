import Header from "./Header"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"

const NotFound = () => {
  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "#121212" : "#fff",
    color: darkTheme ? "#fff" : "#121212",
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
