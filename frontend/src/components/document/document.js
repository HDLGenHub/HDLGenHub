import './document.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Document =(Id)=>{
    const {id} = Id;
    const [document, setDocument] = useState(null);

    useEffect(()=>{
        const fetchDocument =async()=>{
            const res = await axios.get(`http://localhost:4000/Document/${id}`);
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
                    <iframe className='documentiframe' src={document.data.url} frameBorder="0" height="100%" width="100%"></iframe>
                ):null}                
            </div>
        </div>
    );
}

export default Document;