import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            if (!response.ok) {
                throw new Error(resData.message || 'Could not fetch posts.');
            }
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    
    return (
        <>

            {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                <Post key={post.id} body={post.body} author={post.author} />
                ))}
            </ul>
            )};
            {!isFetching && posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2>Loading...</h2>
                </div>
            )}
        </>
    );
}

export default PostsList;