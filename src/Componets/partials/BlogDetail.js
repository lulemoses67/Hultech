import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);

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
                        <img src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg" alt="" />
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