// import React from 'react';
import './BlogsPosts.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const BlogsPosts = (props) => {

    const {name, picture, authorImg, min, title, publishDate  } = props.blogData;
    const handleTime = props.handleTime;
    const bookmarkCount = props.bookmarkCount;
    return (
        <div className='blogPost'>
            <img src={picture} alt="" />
            <div className='post-time' >
                <div className='author-info'>
                    <img src={authorImg} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div>
                    <p className='post-time-para'> {min} min read <span onClick={() => bookmarkCount(props.blogData)}><FontAwesomeIcon icon={faBookmark } /></span></p>
                </div>
            </div>
            <h2>{title}</h2>
            <button onClick={() => handleTime(min)} className='read-btn'>Mark as read </button>
            <hr/>

        </div>
    );
};

export default BlogsPosts;