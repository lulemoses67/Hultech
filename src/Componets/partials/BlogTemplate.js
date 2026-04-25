import { Link } from "react-router-dom";

const BlogTemplate = ({ blogs }) => {
    return (
      <div className="row row-content">
        {blogs.map((blog, index) => (
          <div className="col-4 col-md-6 col-xs-12" key={index} >
            <Link to={`/more/${blog.id}`}>
            <div className="gap-fix">
                <img src={blog.imgUrl} alt={blog.title} />
                <h2>{ blog.title }</h2>
            </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogTemplate;