import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return ( 
        <ul className={classes.posts}>
            <Post author="Maximillian" body="React.js is awesome"/>
            <Post author="Matthew" body="React.js is great"/>
        </ul>
     );
}

export default PostsList;