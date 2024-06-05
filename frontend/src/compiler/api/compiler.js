import axios from "axios";
import { version } from "react";

const Api = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const execute = async (language, version, code) => {
    const response = await Api.post("/execute", {
        language: language,
        version: version,
        files: [
            {
                content: code
            }
        ]
    });
    return response.data;
}

export const Rapidapiexecute=async(language, code)=>{

    const options = {
    method: 'POST',
    url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1a68a28e6cmsh6c34108e454156fp1c1ff0jsne015418c60ec',
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    },
    data: {
        language: language,
        version: 'latest',
        code: code,
        input: null
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}