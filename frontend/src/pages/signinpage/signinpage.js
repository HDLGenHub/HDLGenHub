import SignIn from "../../components/signin/signin";
import './signinpage.css';

const SignInPage =()=>{
    return(
        <div className="signinpagecontainer">
            <div className="signinpagediv">
                <SignIn/>
            </div>
        </div>
    );
}

export default SignInPage;