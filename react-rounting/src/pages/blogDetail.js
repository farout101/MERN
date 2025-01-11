import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// React component name must be named with UPPER CASE
function BlogDetail() {

    // Use this to fetch dynamic url routes and url handling
    // useParams came from react router dom
    let params = useParams();

    // The parameter of the url must be dynamic 
    let url = "http://localhost:3001/blogs/"+params.id
    let { data:blog , loading, error } = useFetch(url)

    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog && (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>Posted By - {blog.author}</h4>
                    <p>{blog.body}</p>
                </div>
            )}
        </div>
    )
}

export default BlogDetail