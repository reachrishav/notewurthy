
const Blog = (props) => {
  let data = props.props
  return (
    <div className="blog">
      <div className="light-font-weight date-font">{data.datePublished}</div>
      <div>
        <h1 className="medium-font-weight"><a href='/' className="no-txt-decor black blue-on-hover">{data.title}</a></h1>
        <div>{data.description}</div>
      </div>
      <button className="custom-button">Read More</button>
    </div>
  )
}

export default Blog