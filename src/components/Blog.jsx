
const Blog = (props) => {
    let data = props.props
  return (
    <div>
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>{data.datePublished}</div>
    </div>
  )
}

export default Blog