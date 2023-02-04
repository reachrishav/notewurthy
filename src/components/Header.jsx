import { useTheme, useThemeUpdate } from "../ThemeContext"
const Header = () => {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()

  return (
    <>
      <header className='flex space-evenly p-25 mt-10'>
        <h2>
          react<span className='blue'>Blog </span>
        </h2>
        <p className='flex align-items-center'>
          writings by &nbsp;<span className='blue'> Rishav Ghosh</span>
        </p>
        <button className='theme-icon' onClick={toggleTheme}>
          {darkTheme ? (
              <i className='fa-regular fa-sun'></i>
              ) : (
              <i className='fa-regular fa-moon'></i>
          )}
        </button>
      </header>
    </>
  )
}

export default Header
