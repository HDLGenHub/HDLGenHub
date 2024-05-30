import ReactPlayer from 'react-player/youtube'
import './video.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Video =(Id)=>{
    const {id} = Id;
    const [video, setVideo] = useState(null);

    useEffect(()=>{
        const fetchVideo =async()=>{
            const res = await axios.get(`http://localhost:4000/Video/${id}`);
            setVideo(res);
        }
        fetchVideo();
    },[]);
    console.log(id);
    console.log("Video: ",video);
    return(
        <div className="videocontainer">
            {video?(
                <div className='videocontainer-video'>
                    <div className='videocontainer-video-header'>
                        <h1>{video.data.name}</h1>
                    </div>
                    <div className='videocontainer-vh'>
                        <div className='video'><ReactPlayer url={video.data.url} controls={true} width="100%" height="100%"/></div>
                        <div className='videocontainer-video-description'>
                            <h1>{video.data.description}</h1>
                        </div>
                    </div>
                </div>
            ):null}
            
        </div>
    );
}

export default Video;