import { Link } from "react-router-dom";

const BlogTemplate = ({ blogs }) => {
    return (
      <div className="row row-content">
        {blogs.map((blog, index) => (
          <div className="col-4 col-md-6 col-xs-12" key={index} >
            <Link to={`/more/${blog.id}`}>
            <div className="gap-fix box-shadow-light">
                <img src={blog.imgUrl} alt={blog.title} />
                <h2>{ blog.title }</h2>
                <p>{ blog.body.slice(0,100)}...Read more</p>
                <div className="btn-group-rt">
                  <button className="btn-outline">Read</button>
                </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogTemplate;