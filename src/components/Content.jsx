import React, { useEffect, useState } from 'react'
import Header from './Header'
import Blogs from './Blogs'
import Footer from './Footer'
import { useTheme } from '../ThemeContext'
import BlogPost from './BlogPost'
import Split from 'react-split'
import WelcomePost from './WelcomePost'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'

const Content = ({ blogs }) => {
	const darkTheme = useTheme()
	const itemsPerPage = 2

	const [selectedId, setSelectedId] = useState(-1)

	const themeStyles = {
		backgroundColor: darkTheme ? '#23272f' : '#ECF2FF',
		color: darkTheme ? '#ECF2FF' : '#23272f',
		transition: 'background-color .5s ease',
	}
	const [itemOffset, setItemOffset] = useState(0)

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
	}, [darkTheme, itemOffset])

	const endOffset = itemOffset + itemsPerPage
	const currentBlogs = blogs.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(blogs.length / itemsPerPage)

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % blogs.length
		setItemOffset(newOffset)
	}

	const CustomLink = ({ pageNumber, isActive, onClick }) => {
		return (
			<motion.li
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className={`page-item${isActive ? ' active' : ''}`}
			>
				<a onClick={onClick} className="page-link" href="/">
					{pageNumber}
				</a>
			</motion.li>
		)
	}

	return (
		<div className="content flex" style={themeStyles}>
			<Header setSelectedId={setSelectedId} />
			<Split sizes={[40, 60]} className="flex page-content">
				<div className="all-blogs flex space-between flex-direction-col">
					<Blogs
						className="ml-2-5em flex flex-direction-col blogs blog-content vertical-scroll"
						blogs={currentBlogs}
						setSelectedId={setSelectedId}
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, x: 10 }}
						exit={{ opacity: 0 }}
					>
						<ReactPaginate
							breakLabel="..."
							previousLabel="<"
							nextLabel=">"
							onPageChange={handlePageClick}
							pageRangeDisplayed={5}
							pageCount={pageCount}
							renderOnZeroPageCount={null}
							containerClassName="pagination"
							nextLinkClassName="page-num"
							pageLinkClassName="page-num"
							previousLinkClassName="page-num"
							activeLinkClassName="page-num-active"
							PageLinkComponent={CustomLink}
						/>
					</motion.div>
				</div>
				<div className="blog-post">
					{selectedId === -1 ? (
						<WelcomePost />
					) : (
						<BlogPost
							blogs={blogs}
							id={selectedId}
							setSelectedId={setSelectedId}
						/>
					)}
				</div>
			</Split>
			<Footer />
		</div>
	)
}

export default Content
