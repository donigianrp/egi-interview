import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';
import PostItem from './PostItem';
import axios from "axios"
import { useEffect } from 'react';

const PostList = () => {
  const { posts, setPosts } = useContext(AppContext);
  
  const fetchHandler = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data.slice(0, 5))
  }
  
  useEffect(() => {
    fetchHandler()
  }, [])

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
