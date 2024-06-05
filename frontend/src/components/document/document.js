import './document.css';
import { SERVER } from '../../env.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DocViewer from "react-doc-viewer";

const Document =(Id)=>{
    const {id} = Id;
    const [document, setDocument] = useState(null);

    useEffect(()=>{
        const fetchDocument =async()=>{
            const res = await axios.get(`${SERVER}/Document/${id}`);
            setDocument(res);
        }
        fetchDocument();
    },[]);
    console.log(id);
    console.log("Document: ",document);
    return(
        <div>
            <div className="documentcontainer">
                {document?(
                    <DocViewer documents={[{uri:document.data.url}]}/>
                ):null}                
            </div>
        </div>
    );
}

export default Document;