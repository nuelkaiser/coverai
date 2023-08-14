import React from 'react';
import Token from "../../assests/images/tokenization 1.png";
import Bell from "../../assests/images/bell.png";
import Profile from "../../assests/images/profile.png";
import "./Homenav.css"

function Homenav() {
    return (
        <div className='homenav-container'>
            <div className='home-directory'>
                <p className='coverletter'>Coverletters /</p>
                <p className='home'> Home</p>
            </div>

            <div className='nav-profile'>
                <div className='token'>
                    <p>Credit left: </p>
                    <img src={Token} alt='coin' className='token-image'/>
                </div>

                <div className='free-plan'>
                    <p>Free plan</p>
                </div>

                <img src={Bell}  className='bell' alt='bell'/>

                <span className='line'></span>

                <img src={Profile} alt='profile'/>
            </div>
        </div>
    )
}

export default Homenav