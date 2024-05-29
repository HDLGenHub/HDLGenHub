import React, { useEffect, useState } from "react";
import './coverimage.css';

const Coverimage =(image)=>{
    const {Image} = image;
    const [ImageID, setImageID] = useState('');

    const getImageID =(Image)=>{
        var pivot = 0;
        var ret='';
        for(var i=0;i<Image.length;i++){
            console.log("Loop is running");
            if(Image[i]==="d"){
                pivot=1;
            }
            else if(pivot===1 && Image[i]=='/'){
                pivot=2;
            }
            else if(pivot===1 && Image[i]!=='/'){
                pivot=0;
            }
            else if(pivot===2 && Image[i]!=='/'){
                ret+=Image[i];
            }
            else if(pivot===2 && Image[i]==='/'){
                return ret;
                break;
            }
        };
        return ret;
    };

    useEffect(()=>{
        const Id = getImageID(Image);
        console.log("ImageID:",Id);
        setImageID(Id);
    },[]);

    return(
        <img className="coverimage" src={`https://drive.google.com/thumbnail?id=${ImageID}&sz=w1000`} alt="Cover Image"/>
    );
}

export default Coverimage;