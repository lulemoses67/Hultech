import useFetch from "./partials/useFetch";
import BlogTemplate from "./partials/BlogTemplate";
import Preloader from "./partials/PreviewLoad";

const BlogList = () => {
    const { error, isPending, data: blogs } = useFetch('https://jsonplaceholder.typicode.com/posts');

        return (
            <>
                { isPending && <Preloader /> }
                <section className='reveal active fade-in'>
                    <div className="container">
                        <h3 className="section-title "><span className='text-primary'>Our B</span>log</h3>
                        <p>Keep updated with all tech news</p>
                        { error && <div className="text-danger">{ error }</div> }
                        { blogs && <BlogTemplate blogs={blogs} /> }
                    </div>
                </section>
            </>
        );
}

export default BlogList;
