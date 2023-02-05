import { Link } from "react-router-dom"

const Blog = (props) => {
  let data = props.props
  return (
    <div className='blog'>
      <div className='light-font-weight date-font light-text-color'>
        {data.datePublished}
      </div>
      <div>
        <Link
          to={`/blog/${data.id}`}
          className='no-txt-decor black blue-on-hover'
        >
          <h1 className='medium-font-weight'>{data.title}</h1>
        </Link>
      </div>
      <div className='light-font-weight light-text-color'>
        {data.description}
      </div>
      <button className='custom-button'>Read More</button>
    </div>
  )
}

export default Blog
