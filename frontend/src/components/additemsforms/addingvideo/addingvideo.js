import { useState } from 'react';
import { SERVER } from '../../../env.js';
import './addingvideo.css';
import axios from 'axios';
import { useParams } from 'react-router';

const Addingvideo =(courseId)=>{
    const [videotitle, setVideotitle] = useState();
    const [videolink, setVideolink] = useState();
    const [videodescription, setVideodescription] = useState();
    const [savedvideo, setSavedvideo] = useState();
    const [savedvideoname, setSavedvideoname] = useState();
    const [savedvideodescription, setSavedvideodescriptiion] = useState();
    const [savedvideoid, setSavedvideoid] = useState();
    const [savedcoursecomponent, setSavedcoursecomponent] = useState();
    const {id} = useParams();

    const postvideo =async()=>{
        const name = videotitle;
        const description = videodescription;
        const url = videolink;
        if(name && description && url){
            const postedvideoresponse = await axios.post(`${SERVER}/Video`, {
                name,
                description,
                url
            });
            console.log("video posted: ",postedvideoresponse);
            //setSavedvideoid(postedvideoresponse.data._id);
            setSavedvideo(postedvideoresponse);
            return postedvideoresponse.data._id;
        } else{
            alert("Missing details to add an item");
        }
    }

    const postcomponent =async(video)=>{
        const courseid = id;
        const itemtype = 'video';
        while(video){
            const name = video.data.name;
            const description = video.data.description;
            const item = video.data._id;
            if(courseid && name && description && item && itemtype){
                const postedcoursecomponentresponse = await axios.post(`${SERVER}/Coursecomponent/`, {
                    courseid,
                    name,
                    description,
                    item,
                    itemtype
                });
                setSavedcoursecomponent(postedcoursecomponentresponse);
                console.log(postedcoursecomponentresponse);
                console.log(savedcoursecomponent);
                setVideotitle('');
                setVideolink('');
                setVideodescription('');
                window.location.reload();
                break;
            } else{
                alert("Missing details to add an item");
            }
        }
    }

    const handleSubmit =()=>{
        const postedvideoresponse = postvideo();
        console.log(savedvideo);
        postcomponent(savedvideo);
    }
    return(
        <div className="addingvideocontainer">
           <label>video title</label>
           <input value={videotitle} onChange={(e)=>setVideotitle(e.target.value)} type="text"/>
           <label>video link</label>
           <input value={videolink} onChange={(e)=>setVideolink(e.target.value)} type="text"/>
           <label>video description</label>
           <input value={videodescription} onChange={(e)=>setVideodescription(e.target.value)} type="text"/>    
           <button onClick={handleSubmit}>Add</button> 
        </div>
    );
}

export default Addingvideo;