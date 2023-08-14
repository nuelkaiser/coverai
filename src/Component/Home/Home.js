import React from 'react';
import "./Home.css"
import Homenav from '../HomeNav/Homenav';

function Home() {
    return (
        <div className='home-container'>
            <Homenav />

            <div className='user'>
                <div>
                    <h1 className='user-name'>Hello, Chris!</h1>
                    <p className='user-text'>It’s time to land your next role. Let’s get to it!</p>
                </div>

                <div className='getting-started-container'>
                    <div className='getting-started'>
                        <div className='title-container'>
                            <h2 className='title'>Getting Started</h2>

                            <div className='steps-container'>
                                <p className='steps'>Step 1 out of 4</p>
                            </div>
                        </div>

                        <div className='pagination'>
                            <div className='paginator'>
                                1
                            </div>

                            <span className='span-paginator'></span>

                            <div className='paginator-2'>
                                2
                            </div>

                            <span className='span-paginator'></span>

                            <div className='paginator-2'>
                                3
                            </div>

                            <span className='span-paginator'></span>

                            <div className='paginator-2'>
                                4
                            </div>
                        </div>
                    </div>

                    <div className='accountable-container'>
                        <h3 className='acccountable'>Get familiar with Accountable</h3>
                        <p className='accountable-word'>
                            Let’s get you started with Accountable through a simple walkthrough guide that explains how it works.
                        </p>

                        <div className='button-container'>
                            <button className='button-1'>
                                New CV/Resume
                            </button>
                            <button className='button-2'>
                                New Coverletter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home