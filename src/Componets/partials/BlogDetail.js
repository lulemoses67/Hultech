import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import ListedBlogs from "./ListedBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('blogs', id);


  return (
    <section className='"reveal active fade-in'>
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <div className="btn-group-lt">
                        <Link className="btn-outline" to={'/blog'}>All Blogs</Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    { isPending && <div>Loading...</div> }
                    { error && <div>{ error }</div> }
                    { blog && (
                        <article className="gap-fix">
                            <h2>{ blog.title }</h2>
                            <img src={blog.imgUrl} alt="" />
                            <p>{ blog.body }</p>
                        </article>
                    )}
                </div>
                <div className="col-4 d-none-xs d-none-md">
                    <ListedBlogs />
                </div>
            </div>
        </div>
    </section>
  );
}
 
export default BlogDetails;