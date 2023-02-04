import Blog from './Blog'

const Blogs = () => {
    let blogs = [
        {
            id: 1,
            title: 'First Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: '2023-01-01'
        },
        {
            id: 2,
            title: 'Second Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: '2023-01-01'
        },
        {
            id: 3,
            title: 'Third Blog',
            description:  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.', 
            datePublished: '2023-01-01'
        }
    ]
  return (
    <>
    {blogs.map(blog => <Blog key={blog.id} props = {blog}/>)}
    </>
  )
}

export default Blogs