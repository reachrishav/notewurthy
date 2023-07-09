import { useTheme, useThemeUpdate } from "../ThemeContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header = ({ setSelectedId }) => {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()

  return (
    <>
      <header className='header p-5'>
        <Link to='/' class='home-link' onClick={() => setSelectedId(-1)}>
          <h2>
            <span className='mr-1 cursive'>note</span>
            <span className='blue ml-2 cursive'>wurthy </span>
          </h2>
        </Link>

        <div>
          <p>
            writings by
            <a
              href='https://www.linkedin.com/in/reachrishav/'
              target='_blank'
              rel='noreferrer'
            >
              <span className='blue'> Rishav</span>
            </a>
          </p>

          <motion.button
            className='theme-icon'
            onClick={toggleTheme}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {darkTheme ? (
              // <i className='fa-regular fa-sun-bright white fa-lg'></i>
              <i class="fa-solid fa-sun"></i>
            ) : (
              // <i className='fa-regular fa-moon fa-lg'></i>
              <i class="fa-solid fa-moon"></i>
            )}
          </motion.button>
        </div>
      </header>
    </>
  )
}

export default Header
