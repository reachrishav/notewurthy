import Blog from "./Blog"
import SkeletonLoading from "./SkeletonLoading"
const Blogs = ({ className, blogs, setSelectedId, isLoading }) => {
  return (
    <>
      {isLoading && (
        <>
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </>
      )}
      <div className={className}>
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            setSelectedId={setSelectedId}
            isLoading={isLoading}
          />
        ))}
      </div>
    </>
  )
}

export default Blogs
