import React from 'react';
import { useActionData, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post =useLoaderData();
    console.log(post);
    const {id ,title , userId , body} = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);



    }
    return (
        <div>
            <h3>details post {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;