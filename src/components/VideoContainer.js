import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from './constants';
import searchQuery from './Head'

import { Link } from 'react-router-dom';
import VideoCard, {AdVideoCard} from './VideoCard';


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const getVideos = async () => {
      try {
  
      
      const response = await fetch(YOUTUBE_VIDEOS_API); 
      const data = await response.json();

       
      
      setVideos(data.items);
    }  catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
    
    getVideos();
  }, []);

      return (
  <div style = {{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
   
    {videos.map((video) => (
      <Link key ={video.id} to={"/watch?v=" + video.id}>
      <VideoCard key= {video.id} info = {video} />
      </Link>

    ))
  }
    

     </div>
 
  );
  
};


export default VideoContainer;