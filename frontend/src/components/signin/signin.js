import { useState } from 'react';
import './signin.css'

const Signin =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="signincontainer">
            <div className='signinheader'>
                <h1>Sign In</h1>
            </div>
            <div className='signininputs'>
                <div className='signininputfield'>
                    <label>Email Address</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className='signinbottom'>
                <div className='signinforgotpw'><a href='#'>Forgot Password ?</a></div>
                <div className='signinagreementtext'>
                    <label>By clicking "Sign in," you agree to our <span className='signinterms'>
                        <a href='#'>Terms of Use</a>
                        </span> and our <span className='signinprivacy'>
                        <a href='#'>Privacy Policy</a></span>.
                    </label>
                </div>
                <div className='signinbutton'>
                    <button>Sign In</button>
                </div>
                <div className='singindonthaveacc'>Don't have an account? <a href='/signuppage'>Sign Up</a></div>
            </div>
        </div>
    );
}

export default Signin;