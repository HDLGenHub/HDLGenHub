import { useEffect, useState } from 'react';
import './coding.css';
import { Editor } from '@monaco-editor/react';
import { Rapidapiexecute, execute } from '../api/compiler';
import axios from 'axios';
import { getCache } from '../../caching/cache';

const Coding=()=>{
    const [code, setCode] = useState('');
    const [response, setResponse] = useState('');
    const [student, setStudent] = useState();
    const [codefiles, setCodefiles] = useState();

    const RandomText =()=>{
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text
    }
    const getCodefiles=async()=>{
        const res = await axios.get(`http://localhost:4000/Code/`);
        console.log(res);
        setCodefiles(res);
    }

    const postCodefile=async()=>{
        const type = "playground";
        const date = new Date();
        const filename = student.name+RandomText()+ date;
        const res = await axios.post(`http://localhost:4000/Code/`, {
            student,
            code,
            type,
            filename
        });
        console.log(res);
    }


    useEffect(()=>{
        console.log(code);
        setStudent(getCache('HDLGenHub_Student'));
        getCodefiles();
    },[code]);
    

    /*
    const handleExecute=async()=>{
        const res = await execute("python","3.10.0", code);
        setResponse(res);
    }
    */
   
    const handleExecute=async()=>{
        const res = await Rapidapiexecute('verilog', code);
        setResponse(res);
    }

    const handleSave=async()=>{
        postCodefile();
        alert("File Saved");
    }

    return(
        <div className='codespace-container'>
            <div className='codespace-files'>
                {codefiles?codefiles.data.map((codefile)=>(
                    <div className='codespace-file-each'>
                        <p>{codefile.filename}</p>
                    </div>
                )):null}
            </div>
            <div className='coding-container'>
                <Editor 
                    height="80vh" 
                    width="100%" 
                    defaultLanguage="verilog" 
                    defaultValue="// some comment"
                    theme='vs-dark'
                    value={code}
                    onChange={(e)=>setCode(e)}
                    />
            </div>
            <div className='running-container'>
                <div className='running-saving'>
                    <button onClick={handleExecute}>Run</button>
                    <button onClick={handleSave}>Save</button>
                </div>
                <h1>{response.output}</h1>
            </div>
        </div>
    );
}

export default Coding;