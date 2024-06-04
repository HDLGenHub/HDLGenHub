import { useEffect, useState } from 'react';
import './coding.css';
import { Editor } from '@monaco-editor/react';
import { Rapidapiexecute, execute } from '../api/compiler';

const Coding=()=>{
    const [code, setCode] = useState('');
    const [response, setResponse] = useState('');


    /*
    useEffect(()=>{
        console.log(code);
    },[code]);
    */

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

    return(
        <div className='codespace-container'>
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
                <button onClick={handleExecute}>Run</button>
                <h1>{response.output}</h1>
            </div>
        </div>
    );
}

export default Coding;