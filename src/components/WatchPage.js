import React from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './Utils/appSlice';
import { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';



const WatchPage = () => {
 const [searchParams] = useSearchParams();
 const videoId = searchParams.get("v");

 console.log("Video ID:", videoId);
 console.log(videoId)


    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu()); 
    },[]);


    return( 
    <div className='px-5'>
        {videoId ? (

         <iframe 
           width="1000" 
           height="500" 
           src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen
             ></iframe>
        ) : (
            <p> No video selected</p>
        
           
    )}

         </div>
    );
};

export default WatchPage;