import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h1>all post {posts.length}</h1>
            <p>
                {
                    posts.map(post => <Post 
                    key={post.id}
                    post ={post}></Post>)
                }
            </p>
        </div>
    );
};

export default Posts;