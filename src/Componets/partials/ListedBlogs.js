import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const ListedBlogs = () => {
    const { error, data: blogs } = useFetch('blogs');
        return (
            <> 
                <section className='reveal active fade-in'>
                        <h3>News Highlights</h3>
                        { error && <div className="text-danger">{ error }</div> }
                        {blogs && blogs.map((blog, index) => (
                            <div key={index} >
                                <Link to={`/more/${blog.id}`}>
                                    <div className="gap-fix box-shadow-light">
                                        <h3>{ blog.title }</h3>
                                        <p>{ blog.body.slice(0,100)}...Read more</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </section>
            </>
        );
}

export default ListedBlogs;
