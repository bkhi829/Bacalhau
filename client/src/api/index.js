import axios from 'axios';

export const fetchAllMembers = () => axios.get(process.env.REACT_APP_API_URL+"/members");

export const fetchVideoTypes = () => axios.get(process.env.REACT_APP_API_URL+"/videos");

export const fetchVideos = (type,nextPageToken) => axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${type}${nextPageToken!==null?'&pageToken='+nextPageToken:""}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);