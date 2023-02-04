import Blog from './Blog'

const Blogs = (props) => {
    let blogs = [
        {
            id: 1,
            title: 'Designing in the Build',
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
    <div className={props.className}>
        {blogs.map(blog => <Blog key={blog.id} props = {blog}/>)}
    </div>
  )
}

export default Blogs