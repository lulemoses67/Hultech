import { Link } from "react-router-dom";

const BlogTemplate = ({ blogs }) => {
    return (
      <div className="row row-content">
        {blogs.map(blog => (
          <div className="col-4 col-md-6 col-xs-12" key={blog.id} >
            <Link to={`/more/${blog.id}`}>
            <div className="gap-fix">
                <img src="https://images.pexels.com/photos/14348488/pexels-photo-14348488.jpeg" alt="" />
                <h2>{ blog.title }</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa vitae harum suscipit quaerat eligendi quo odio praesentium a libero? Dolores magnam exercitationem sed eligendi atque quas qui error doloremque.</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogTemplate;