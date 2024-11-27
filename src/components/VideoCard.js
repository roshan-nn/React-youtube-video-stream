import React from 'react';
import WatchPage from './WatchPage';


    const VideoCard = ({info}) => {
       
        if(!info || !info.snippet || !info.statistics) {
            return <div> Loading ...</div>
        }
        const {snippet, statistics} = info;
        const {channelTitle, title, thumbnails } = snippet; 
        console.log(thumbnails);

        return (

        
        <div className='shadow-lg'> 
            <img className='rounded-lg' alt="thumbnail" src = {thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2' style= {{ width: "300px"}}> {title} </li>
                <li> {channelTitle} </li>
                <li>{statistics.viewCount} views </li>   

            </ul>
            </div>
                )

    };


   export const AdVideoCard = ({info}) => {
        return ( 
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard  info={info}/> 
            </div> 
        )
    }

    export default VideoCard;

