import {React, useEffect, useState} from 'react';
import './app.css';
import NavBar from './components/navBar';
import VideoList from './components/video_list/vidoe_list';
import VidoesList from './components/video_list/vidoe_list';

function App() {
  const [videos, setVideos] = useState([]); // function component에서 state를 사용하 할수 있는 방법

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBM-eOMEJDvrKOKsEKbeCqkbf5wBxzC6vE", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <VideoList videos={videos} />
  
  );
}

export default App;
