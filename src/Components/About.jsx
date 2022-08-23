import React from 'react'
import './Abouts.css'
const About = () => {
    return (
        <div className="container flex">
            <div class="header waypoint" data-animation="slide-in-left">
                ABOUT
            </div>
            <div class="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>

            <div className="about-wrapper obj">
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-speedometer"></i>
                    <h4>Develop User interfaces</h4>
                    <p> I like to code things from scratch, and enjoy bringing ideas to life in the browser </p>
                </div>

                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-cellphone-link"></i>
                    <h4>My Objective</h4>
                    <p>  Responsive websites built for an optimal user experience that achieves your business goals  </p>
                </div>
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-lightbulb-outline"></i>
                    <h4>My Objective</h4>
                    <p>  Responsive websites built for an optimal user experience that achieves your business goals  </p>
                </div>
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi mdi-rocket"></i>
                    <h4>My Objective</h4>
                    <p>  Responsive websites built for an optimal user experience that achieves your business goals  </p>
                </div>

                


            </div>





        </div>
    )
}

export default About