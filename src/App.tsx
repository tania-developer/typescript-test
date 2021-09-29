import React, { useEffect, useState} from 'react';
import Header from './Components/Header';
import PostCard from './Components/PostCard';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

interface IPost{
  id: number;
  download_url: string;
  author: string;
}

const App: React.FC = () => {
  const [allPost, setAllPost] = useState<IPost[]>([]);
  useEffect(() =>{
    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(data => setAllPost(data));
  },[])
  console.log(allPost);
  
  
  return (
    <div className="">
      <Header></Header>
      <div className="post-container">
        {
           allPost.length === 0 &&<CircularProgress disableShrink />
        }
        {
          <PostCard posts = {allPost}></PostCard>
        }
      </div>
      
    </div>
  );
}

export default App;
