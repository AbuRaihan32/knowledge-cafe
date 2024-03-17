import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookMarkBtn = (blog) =>{
    const isExist = bookmarks.find(book => book.id === blog.id);
    if(!isExist){
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);

      const readingTime = document.getElementById('reading_time');
      const readText = readingTime.innerText;
      const readNum = parseInt(readText);
  
      const currentTime = readNum + blog.reading_time;
      readingTime.innerText = currentTime;
    }else{
      alert('already added')
    }



    
  }
  return (
    <>
      <div className='max-w-[1260px] mx-auto'>
        <Header></Header>
        <div className='md:flex '>
          <Blogs handleBookMarkBtn={handleBookMarkBtn}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
