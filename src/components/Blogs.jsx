import Blog from './Blog'

const Blogs = ({className, blogs, setSelectedId}) => {
  return (
    <div className={className}>
        {blogs.map(blog => <Blog key={blog.id} blog = {blog} setSelectedId={setSelectedId}/>)}
    </div>
  )
}

export default Blogs