import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
import './home.css';

function Home() {

  let url = "http://localhost:3001/blogs"
  let { data : blogs, loading, error } = useFetch(url)

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}

      {/* during the first call of the data the useEffect still isn't render so there could be some potential errors with the data */}
      {blogs && blogs.map(blog => (
        // we need keys at the divs of each compnent for the better performance 
        <div key={blog.id} className="crd">
          <h3>{blog.title}</h3>
          <p>posted by {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
