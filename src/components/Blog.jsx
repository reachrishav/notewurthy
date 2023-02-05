import { Link } from "react-router-dom"

const Blog = ({ blog }) => {
  return (
    <div className='blog'>
      <div className='light-font-weight date-font light-text-color'>
        {blog.datePublished}
      </div>
      <div>
        <Link
          to={`/blog/${blog.id}`}
          className='no-txt-decor black blue-on-hover'
        >
          <h1 className='medium-font-weight'>{blog.title}</h1>
        </Link>
      </div>
      <div className='light-font-weight light-text-color'>
        {blog.description}
      </div>
      <Link to={`/blog/${blog.id}`}>
        <button className='custom-button'>Read More</button>
      </Link>
    </div>
  )
}

export default Blog
