import PropTypes from 'prop-types'
const Bookmarks = ({ bookmarks }) => {
    return (
        <>
            <div className="w-1/3 p-5">
                <div className="py-5 text-center bg-[#6047EC1A] border-2 border-[#6047EC] rounded-lg">
                    <h1 className="text-xl font-bold text-[#6047EC]">Spent time on read : <span id="reading_time">0</span> min</h1>
                </div>
                <div className="bg-[#1111110D] mt-6 rounded-lg p-4 space-y-3">
                    <h2 className="text-center text-xl font-semibold">Bookmarked Blogs : {bookmarks.length}</h2>
                    {
                        bookmarks.map((book, idx )=> <h1 key={idx} className="p-5 bg-white rounded-lg">{book.title}</h1>)
                    }
                </div>
            </div>
        </>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;