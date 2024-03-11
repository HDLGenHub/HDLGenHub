import React from 'react'
import './Help.css'
import img from '../../images/help.png'
import {Play,User,Book,Shield} from 'react-feather';
function Help() {
    return (

        <div className='container'>
            <div className='help-container'>
                <div className='square'>
                    <p className='help-text'>Learner Help Center</p>
                    <div>
                        <input type='search' className='help-search' placeholder='        Search for help'>
                        </input>
                    </div>
                </div>
                <div>
                    <img src ={img} alt='img' className='help-image'/>
                </div>
            </div>
            <div className='help-boxes-container'>
                <div className='help-box1'>
                    <Play className='help-icon'/>
                    <h3>Getting Started</h3>
                    <p style={{fontSize:"14px", width:"240px",marginLeft:"26px"}}>Learn how <span style={{fontWeight:"800"}}>HDL Gen Hub</span> works and how to start learing</p>
                </div >
                <div className='help-box2'>
                    <User className='help-icon'/>
                    <h3>Account/Profile</h3>
                    <p style={{fontSize:"14px", width:"240px",marginLeft:"26px"}}>Manage your account setting</p>
                </div>
                <div className='help-box2'>
                    <Book className='help-icon'/>
                    <h3>Learning Experience</h3>
                    <p style={{fontSize:"14px", width:"240px",marginLeft:"26px"}}>Everithing about the <span style={{fontWeight:"800"}}>HDL Gen Hub</span> learning experience</p>
                </div>
                <div className='help-box2'>
                    <Shield className='help-icon'/>
                    <h3>Trust & Safe</h3>
                    <p style={{fontSize:"14px", width:"240px",marginLeft:"26px"}}>Trust and safty informations</p>
                </div>
            </div>
        </div>
    )
}

export default Help