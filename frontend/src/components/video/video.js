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
        <div>
            <div className="videocontainer">
                {video?(
                    <ReactPlayer className='video' url={video.data.url} controls={true} width="100%" height="100%"/>
                ):null}
                
            </div>
        </div>
    );
}

export default Video;