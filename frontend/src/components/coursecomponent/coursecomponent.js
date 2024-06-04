import { useEffect, useState } from "react";
import Video from "../video/video";
import axios from "axios";
import './coursecomponent.css';
import Document from "../document/document";
import Showquiz from "../showquiz/showquiz";

const Coursecomponent =(Id)=>{
    const {id} = Id;
    const [coursecomponent, setCoursecomponent] = useState(null);
    useEffect(()=>{
        const getCoursecomponent =async()=>{
            const response = await axios.get(`${process.env.SERVER}/Coursecomponent/${id}`);
            setCoursecomponent(response);
        }
        getCoursecomponent();
        console.log("item id: ",coursecomponent);
    },[]);
    console.log("item id: ",coursecomponent);
    return(
        <div className="coursecomponentcontainer">
            {coursecomponent?(
                <div className="coursecomponent">
                    {(coursecomponent.data.itemtype==="video")?(<Video id={coursecomponent.data.item}/>):null}
                    {/*{(coursecomponent.data.itemtype==="document")?(<Document id={coursecomponent.data.item}/>):null}*/}
                    {(coursecomponent.data.itemtype==="quiz")?(<Showquiz id={coursecomponent.data.item}/>):null}
                </div>
            ):null}
        </div>
    );
}

export default Coursecomponent;