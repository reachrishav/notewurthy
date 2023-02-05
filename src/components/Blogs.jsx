import Blog from './Blog'

const Blogs = ({className, blogs}) => {
  return (
    <div className={className}>
        {blogs.map(blog => <Blog key={blog.id} blog = {blog}/>)}
    </div>
  )
}

export default Blogs