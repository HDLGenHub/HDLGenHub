import './homepage.css';
import HomeImage from '../../images/HomeImage.png';
import HomeBottom from '../../images/HomeBottom.png'

const HomePage =()=>{
    return(
        <div className="homepagecontainer">
            <div className='homerow1'>
                <div className='homerow1left'>
                    <div className='homerow1left-p'>
                        <h2><span style={{fontWeight:"800"}}><span style={{color:"#fa9746"}}>HDL</span> Gen Hub</span> for learners</h2><br></br>
                        <h1>
                            Fast & easiest<br></br>
                            way to<br></br>
                            learn <span style={{color:"#fa9746"}}>HDL</span>
                        </h1>
                    </div>
                </div>
                <div className='homerow1right'>
                    <img src={HomeImage}/>
                </div>
            </div>
            <hr className='homesectionbreakline'></hr>
            <div className='homerow2'>
                <h1>Exclusive content, exceptional quality</h1>
                <h2>Unlock the world of HDLs through our immersive e-learning platform. From beginner basics to advanced techniques, dive into digital design at your
                    own pace. Engage, practice, and connect in a community-driven space designed for mastering hardware description languages.</h2>
            </div>
            <div className='homerow3'>
                <div className='homerow3section'>
                    <div className='homerow3box'>
                        <h1>
                            <span style={{color:"#fa9746", fontSize:"30px", fontWeight:'700'}}>100+</span><br></br>
                            hours of content to<br></br>
                            gain knowledge<br></br>
                            (updating regularly)
                        </h1>
                    </div>
                </div>
                <div className='homerow3section'>
                    <div className='homerow3box'>
                        <h1>
                            <span style={{color:"#fa9746", fontSize:"30px", fontWeight:'700'}}>10+</span><br></br>
                            experts from the<br></br>
                            university with the<br></br>
                            best guidance
                        </h1>
                    </div>
                </div>
                <div className='homerow3section'>
                    <div className='homerow3box'>
                        <h1>
                            <span style={{color:"#fa9746", fontSize:"30px", fontWeight:'700'}}>350+</span><br></br>
                            users to unleash their<br></br>
                            Potential through E-<br></br>
                            Learning Excellence
                        </h1>
                    </div>
                </div>
            </div>
            <hr className='homesectionbreakline'></hr>
            <div className='homerow4'>
                <div className='homerow4items'>
                    <img src={HomeBottom}></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;