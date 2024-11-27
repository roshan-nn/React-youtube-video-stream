const GOOGLE_API_KEY="AIzaSyDbAStQVAX0EZTHgxJgNeHlYr2jZIKarBU";

export const YOUTUBE_VIDEOS_API=  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key='+
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`
