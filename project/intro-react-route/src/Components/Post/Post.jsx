import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {title, id , body} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/Post/${id}`)

    }
    return (
        <div className='post'>
            <h5>{id}</h5>
            <h4>{title}</h4>
            <Link to ={`/Post/${id}`}>Details</Link>
           <Link to={`/post/${id}`}><button>Show details</button></Link>
           <button onClick={handleNavigation}>With button handeler</button>
        </div>
    );
};

export default Post;