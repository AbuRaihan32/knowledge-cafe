import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookMarkBtn}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blog => setBlogs(blog))
    }, [])
    return (
        <div className="w-2/3">
            <div>
            {
                blogs.map(blog => <Blog key={blog.id} handleBookMarkBtn={handleBookMarkBtn} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

Blogs.propTypes ={
    handleBookMarkBtn: PropTypes.func
}
export default Blogs;