import './Footer.css'
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'

const Footer =()=>{
    return(
        <div className='footercontainer'>
            <div className='footeruppercontainer'>
                <div className='footeruppersection1'>
                    <div className='footeruppersection1-inside'>
                        <h1>CONTACT US</h1>
                        <div className='footeruppersection1-inside-div1'>
                            <h1>E-MAIL</h1>
                            <p>hdlgenhub@minisoft.com</p>
                        </div>
                        <div className='footeruppersection1-inside-div2'>
                            <h1>HOTLINE</h1>
                            <p>+94 71 123 4567</p>
                            <p>+94 71 123 4567</p>
                        </div>
                    </div>
                </div>
                <div className='footeruppersectionverticlelines'></div>
                <div className='footeruppersection2'>
                    <h1>FOLLOW US ON</h1>
                    <div className="social-icon">
                        <a href="https://web.facebook.com/dulshan.siriwardhana/">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/dulshan-siriwardhana-17b77521a/">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com/dulshansiriwardhana/">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className='footeruppersectionverticlelines'></div>
                <div className='footeruppersection3'>
                    <h1>HELP</h1>
                    <p>My Account</p>
                    <p>My Learning</p>
                    <p>Courses</p>
                </div>
                <div className='footeruppersectionverticlelines'></div>
                <div className='footeruppersection4'>
                    <h1>ABOUT US</h1>
                    <div className='footeruppersection4paragraph'>At  <span style={{fontWeight:'700'}}><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</span>, we're passionate about redefining education
                        through innovation and accessibility. Our journey began with a
                        vision to democratize learning, making high-quality education
                        available to all, regardless of geographical boundaries or
                        constraints. We believe in the power of knowledge to transform
                        lives, and our e-learning platform stands as a testament to this
                        belief. Committed to excellence, we curate a diverse range of
                        courses, leveraging cutting-edge technology to create an
                        immersive and interactive learning experience.
                    </div>
                </div>
            </div>
            <div className='footerhorizontialline'>
                <hr></hr>
            </div>
            <div className='footerlowercontainer'>
                <p>&copy; Copyright{new Date().getFullYear()} HDL Gen Hub | Team-MantisOfficial | All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;