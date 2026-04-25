import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('blogs', id);


  return (
    <section className='"reveal active fade-in'>
        <div className="container">
            <div className="row-content">
                <div>
                    { isPending && <div>Loading...</div> }
                    { error && <div>{ error }</div> }
                    { blog && (
                        <article>
                        <h2>{ blog.title }</h2>
                        <img src={blog.imgUrl} alt="" />
                        <p>{ blog.body }</p>
                        </article>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
 
export default BlogDetails;