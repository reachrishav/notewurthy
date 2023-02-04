import { useTheme, useThemeUpdate } from "../ThemeContext"
const Header = () => {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()

  return (
    <>
      <header className='flex space-evenly p-25 mt-10'>
        <h2>
          note<span className='blue italic'>wurthy </span>
        </h2>
        <p className='flex align-items-center'>
          writings by &nbsp;
          <a href='https://www.linkedin.com/in/reachrishav/' target="_blank" rel="noreferrer">
            <span className='blue'> Rishav Ghosh</span>
          </a>
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
