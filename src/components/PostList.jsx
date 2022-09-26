import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';
import PostItem from './PostItem';
import axios from "axios"
import { useEffect } from 'react';

const PostList = () => {
  const { posts, setPosts } = useContext(AppContext);
  
 // fetch and set posts here
 //'https://jsonplaceholder.typicode.com/posts'

  return (
    <ul>
        {//list of posts here
        }
    </ul>
  );
};

export default PostList;
