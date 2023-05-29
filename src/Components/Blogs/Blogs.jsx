// import React from 'react';
import { useEffect, useState } from 'react';
import BlogsPosts from '../BlogsPosts/BlogsPosts';
import TimeAndBookmarks from '../TimeAndBookmarks/TimeAndBookmarks';
import './Blogs.css'

const Blogs = () => {

    const [blog, setBlog] = useState([])
    const [totalMin, setTotalMin] = useState(0)
    const [totalBlog, setTotalBlog] = useState([])

    const bookmarkCount = (bookmark)=>{
        const newTotalBlog = [...totalBlog, bookmark]
        setTotalBlog(newTotalBlog);
        console.log(newTotalBlog)
    }



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])

    const handleTime = (min) => {
       const newMin = totalMin + min;
       setTotalMin(newMin);
       console.log(newMin) 
    }

    return (
        <div className='blogs'>
            <div>
            {
                blog.map(blogData => <BlogsPosts
                    key={blogData.id}
                    blogData = {blogData}
                    handleTime = {handleTime}
                    bookmarkCount = {bookmarkCount}

                ></BlogsPosts>)
            }
            </div>
  

            <TimeAndBookmarks
             min= {totalMin}
             totalBlog ={totalBlog}
            
            
            ></TimeAndBookmarks>


        </div>
    );
};

export default Blogs;