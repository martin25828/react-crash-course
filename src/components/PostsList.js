//import { useState, useEffect } from 'react';
import {useLoaderData} from "react-router-dom";

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList(props) {
    const posts = useLoaderData();


// useEffect() makes sure that the get will be executed only when needed. the second parameter is used for a varialbe
// when the depnended is updated then the function in useEffect is executed.
/*    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            console.log(resData);
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []); */

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        //setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;