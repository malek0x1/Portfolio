import React from 'react'
import './Heading.css'
import Typed from 'react-typed';

const Heading = () => {
    return (
        <div className='Heading'>

            <div class="text">
                Hello, I'm <span class="highlight">   <Typed strings={['Malek Mneimneh']} typeSpeed={60} /></span>
                <br />
                I'm a Front-End web developer.
            </div>
            <div className="button page-link" dest="about">
                View my work
                <i class="mdi mdi-arrow-right"></i>
            </div>


            
            <div className="navbar">
                <i class="mdi mdi-home-outline"></i>
                <i class="mdi mdi-github"></i>
                <i class="mdi mdi-account-outline"></i>
                <i class="mdi mdi-information-outline"></i>
            </div>
        </div>
    )
}

export default Heading