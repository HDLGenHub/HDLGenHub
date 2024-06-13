import { useParams } from 'react-router';
import './addingdocument.css';
import { useState } from 'react';
import { SERVER } from '../../../env';
import axios from 'axios';
const Addingdocument =()=>{
    const {id} = useParams();
    const [heading, setHeading] = useState();
    const [description, setDescription] = useState();
    const [link, setLink] = useState();
    const [document, SetDocument] = useState();
    const [coursecomponent, setCoursecomponent] = useState();

    const postItem =async()=>{
        const name = heading;
        const description = description;
        const url = link;
        if(name && description && url){
            const postedresponse = await axios.post(`${SERVER}/Document`, {
                name,
                description,
                url
            });
            console.log("document posted: ",postedresponse);
            
            SetDocument(postedresponse);
            return postedresponse.data._id;
        } else{
            alert("Missing details to add an item");
        }
    }

    const postcomponent =async(document)=>{
        const courseid = id;
        const itemtype = 'document';
        while(document){
            const name = document.data.name;
            const description = document.data.description;
            const item = document.data._id;
            if(courseid && name && description && item && itemtype){
                const coursecomponentresponse = await axios.post(`${SERVER}/Coursecomponent/`, {
                    courseid,
                    name,
                    description,
                    item,
                    itemtype
                });
                setCoursecomponent(coursecomponentresponse);
                console.log(coursecomponentresponse);
                console.log(coursecomponent);
                setHeading('');
                setLink('');
                setDescription('');
                window.location.reload();
                break;
            } else{
                alert("Missing details to add an item");
            }
        }
    }

    const handleSubmit=()=>{
        postItem();
        postcomponent(document);
    }
    return(
        <div className="document-adding-container">
            <label>Heading</label>
            <input onChange={(e)=>setHeading(e.target.value)} type="text"/>
            <label>Description</label>
            <input onChange={(e)=>setDescription(e.target.value)} type="text"/>
            <label>Document</label>
            <input onChange={(e)=>setLink(e.target.value)} type="text"/>
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
}

export default Addingdocument;