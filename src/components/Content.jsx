import React, { useEffect, useState } from "react"
import Header from "./Header"
import Blogs from "./Blogs"
import Footer from "./Footer"
import { useTheme } from "../ThemeContext"
import BlogPost from "./BlogPost"
import Split from "react-split"
import WelcomePost from "./WelcomePost"
import ReactPaginate from "react-paginate"

const Content = ({ blogs }) => {
  const darkTheme = useTheme()
  const itemsPerPage = 3

  const [selectedId, setSelectedId] = useState(-1)

  const themeStyles = {
    backgroundColor: darkTheme ? "#23272f" : "#ECF2FF",
    color: darkTheme ? "#ECF2FF" : "#23272f",
    transition: "background-color .5s ease",
  }
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage
  const currentBlogs = blogs.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(blogs.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length
    setItemOffset(newOffset)
  }

  return (
    <div className='content flex' style={themeStyles}>
      <Header setSelectedId={setSelectedId} />
      <Split sizes={[40, 60]} className='flex page-content'>
        <div className='all-blogs flex space-between flex-direction-col'>
          <Blogs
            className='ml-1-5em flex flex-direction-col blogs blog-content vertical-scroll'
            blogs={currentBlogs}
            setSelectedId={setSelectedId}
          />
          <div style={{ marginTop: "1rem" }}>
            <ReactPaginate
              breakLabel='...'
              previousLabel='<'
              nextLabel='>'
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName='pagination'
              nextLinkClassName={`page-num page-num-white page-lr-icon ${
                darkTheme ? "page-num-dark" : ""
              }`}
              pageLinkClassName={`page-num page-num-white ${
                darkTheme ? "page-num-dark" : ""
              }`}
              previousLinkClassName={`page-num page-num-white page-lr-icon ${
                darkTheme ? "page-num-dark" : ""
              }`}
              activeLinkClassName='page-num-active'
              marginPagesDisplayed={2}
            />
          </div>
        </div>
        <div className='blog-post'>
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
