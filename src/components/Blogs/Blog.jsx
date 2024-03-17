import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blog => setBlogs(blog))
    }, [])
    return (
        <div>
            <h3>Blog Quantity : {blogs.length}</h3>
        </div>
    );
};

export default Blog;