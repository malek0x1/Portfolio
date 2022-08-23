import React from 'react'
import './Contact.css'
import TextField from '@mui/material/TextField';
const Contact = () => {
    return (
        <div className="container flex">
            <div class="header waypoint" data-animation="slide-in-left">
                Contact Me
            </div>
            <div class="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
            <div className="form">
                <input type="text" placeholder='Enter a your name' />
                <input type="text" placeholder='Enter a valid email address' />
                <textarea placeholder='Enter your message'></textarea>
                <button className="btn custombtn">Submit</button>
            </div>



        </div>
    )
}

export default Contact