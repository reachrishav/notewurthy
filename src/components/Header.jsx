import { useTheme, useThemeUpdate } from '../ThemeContext'
import { Link } from 'react-router-dom'

const Header = () => {
	const toggleTheme = useThemeUpdate()
	const darkTheme = useTheme()

	return (
		<>
			<header className="header p-5">
				<Link to="/" class="home-link">
					<h2>
						<span className="mr-1 cursive">note</span>
						<span className="blue ml-2 cursive">wurthy </span>
					</h2>
				</Link>

				<div>
					<p>
						writings by
						<a
							href="https://www.linkedin.com/in/reachrishav/"
							target="_blank"
							rel="noreferrer"
						>
							<span className="blue"> Rishav</span>
						</a>
					</p>

					<button className="theme-icon" onClick={toggleTheme}>
						{darkTheme ? (
							// <i className="fa-regular fa-sun"></i>
							<i className="fa-regular fa-sun-bright white"></i>
						) : (
							<i className="fa-regular fa-moon"></i>
						)}
					</button>
				</div>
			</header>
		</>
	)
}

export default Header
