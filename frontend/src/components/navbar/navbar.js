import './navbar.css';

const Navbar =()=>{
    return(
        <div className="navbarcontainer">
            <div className="navbarleftcontainer">
                <ul>
                    <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
            </div>
            <div className="navbarrightcontainer">
                <ul>
                    <li className='navbarsignin'><a href='/signinpage'>Sign In</a></li>
                    <li className='navbarsignup'><a href='/signuppage'>Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;