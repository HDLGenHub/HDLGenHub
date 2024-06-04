import {sha256} from 'crypto-hash';
import { useState } from 'react';

export const Hashing =async(e)=>{
    const [ret, setRet] = useState('');
    setRet(await sha256(e));
    return ret;
}