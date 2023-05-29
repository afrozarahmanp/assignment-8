// import React from 'react';
import './TimeAndBookmarks.css'
const TimeAndBookmarks = (props) => {
    return (
        <div >
            <h4 className='time-spent'>
                Spent time on read = {props.min} min
            </h4>
            <div>
                <h4>
                    Bookmarked Blogs : {props.totalBlog.length}
                </h4>
                {
                    props.totalBlog.map(blog => <h5> {blog.title}
                    </h5>)
                }

            </div>


        </div>
    );
};

export default TimeAndBookmarks;