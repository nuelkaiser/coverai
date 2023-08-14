import React from 'react';
import Logo from "../../assests/images/logo.png"
import Home from "../../assests/images/home.png";
import Calender from "../../assests/images/calender.png";
import Card from "../../assests/images/cardholder.png";
import Identity from "../../assests/images/identification.png";
import User from "../../assests/images/users.png";
import Clock from "../../assests/images/clock.png"
import SignOut from "../../assests/images/signout.png";
import Shopping from "../../assests/images/shopping.png";
import Gift from "../../assests/images/gift.png";
import Question from "../../assests/images/question.png";


import "./sidenav.css"

function sidenav() {
    return (
        <div className="sidenav-container">
            <div className='logo-container'>
                <img src={Logo} alt='Log' />
                <p className='sidenav-logo'>Coverai</p>
            </div>

            <div className='nav-option-container'>
                <div className='nav-option'>
                    <img src={Home}  alt='pic'/>
                    <p>DashBoard</p>
                </div>
                <div className='nav-option selected'>
                    <img src={Card} alt='pic'/>
                    <p>Coverletters</p>
                </div>
                <div className='nav-option'>
                    <img src={Identity}  alt='pic'/>
                    <p>CV/Resume</p>
                </div>

                <div className='nav-option'>
                    <img src={Calender}  alt='pic'/>
                    <p>Interview Prep</p>
                </div>

                <div className='nav-option'>
                    <img src={User}  alt='pic'/>
                    <p>Contacts</p>
                </div>

                <div className='nav-option'>
                    <img src={Clock}  alt='pic'/>
                    <p>Job Tracker</p>
                </div>
            </div>

            <div className='nav-extra'>
                <div className='nav-option'>
                    <img src={Shopping} alt='pic'/>
                    <p>Get Extension</p>
                </div>

                <div className='nav-option'>
                    <img src={Gift} alt='pic'/>
                    <p>Refer & Earn</p>
                </div>

                <div className='nav-option'>
                    <img src={Question}  alt='pic'/>
                    <p>Help & Support</p>
                </div>

                <div className='nav-option'>
                    <img src={SignOut} alt='pic'/>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default sidenav