import React, { useEffect, useState } from 'react'
import Header from './Header'
import Blogs from './Blogs'
import Footer from './Footer'
import { useTheme } from '../ThemeContext'
import BlogPost from './BlogPost'
import Split from 'react-split'

const Content = ({ blogs }) => {
	const darkTheme = useTheme()

	const [selectedId, setSelectedId] = useState(1)

	const themeStyles = {
		backgroundColor: darkTheme ? '#23272f' : '#fff',
		color: darkTheme ? '#fff' : '#23272f',
		transition: 'background-color .5s ease',
	}

	useEffect(() => {
		setSelectedId(selectedId)
	}, [selectedId])

	useEffect(() => {
		darkTheme
			? document
					.querySelectorAll('.black')
					.forEach((element) => element.classList.add('white'))
			: document
					.querySelectorAll('.white')
					.forEach((element) => element.classList.remove('white'))

		darkTheme
			? document
					.querySelectorAll('.btn-light')
					.forEach((element) => element.classList.add('btn-dark'))
			: document
					.querySelectorAll('.btn-dark')
					.forEach((element) => element.classList.remove('btn-dark'))
	}, [darkTheme])

	return (
		<div className="content flex" style={themeStyles}>
			<Header />
			<Split sizes={[40, 60]} className="flex page-content">
				<div className="all-blogs vertical-scroll">
					<Blogs
						className="ml-2-5em flex flex-direction-col blogs blog-content"
						blogs={blogs}
						setSelectedId={setSelectedId}
					/>
				</div>
				<div className="blog-post ">
					<BlogPost blogs={blogs} id={selectedId} />
				</div>
			</Split>
			<Footer />
		</div>
	)
}

export default Content
