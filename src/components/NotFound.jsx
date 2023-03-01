import Header from './Header'
import Footer from './Footer'
import { useTheme } from '../ThemeContext'
import notFoundIllustration from '../assets/notfound404page.svg'

const NotFound = () => {
	const darkTheme = useTheme()

	const themeStyles = {
		backgroundColor: darkTheme ? '#23272f' : '#ECF2FF',
		color: darkTheme ? '#ECF2FF' : '#23272f',
	}
	return (
		<div className="full-vh" style={themeStyles}>
			<Header style={{ height: '10%' }} />
			<div
				className="flex align-items-center justify-content-center"
				style={{ height: '85%' }}
			>
				<img
					src={notFoundIllustration}
					alt=""
					className="not-found-illustration"
				/>
			</div>
			<Footer style={{ height: '5%' }} />
		</div>
	)
}

export default NotFound
