// import React from 'react';
import { useEffect, useState } from 'react';
import BlogsPosts from '../BlogsPosts/BlogsPosts';
import TimeAndBookmarks from '../TimeAndBookmarks/TimeAndBookmarks';
import './Blogs.css'

const Blogs = () => {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])

    return (
        <div className='blogs'>
            <div>
            {
                blog.map(blogData => <BlogsPosts
                    key={blogData.id}
                    blogData = {blogData}

                ></BlogsPosts>)
            }
            </div>
  

            <TimeAndBookmarks></TimeAndBookmarks>


        </div>
    );
};

export default Blogs;