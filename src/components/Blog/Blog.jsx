import PropTypes from 'prop-types';
import { MdBookmarkBorder } from "react-icons/md";
const Blog = ({ blog, handleBookMarkBtn }) => {
    const { title, blog_cover_photo, author_img, author_name, posted_date, reading_time, hashTag } = blog;
    return (
        <div className='p-5'>
            <img className='rounded-2xl w-full h-[250px] object-cover' src={blog_cover_photo} alt={`cover photo of title ${title}`} />
            <h1 className='text-2xl'>{title}</h1>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-[50px] h-[50px] object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h3>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={() => {handleBookMarkBtn(blog)}} className='text-orange-500'><MdBookmarkBorder></MdBookmarkBorder></button>
                </div>
            </div>

            <p>
                {
                    hashTag.map((hash, idx) => <span className='mr-3 text-blue-700' key={idx}><a href="#">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarkBtn: PropTypes.func
}
export default Blog;