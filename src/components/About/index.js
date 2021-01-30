import React from 'react'
import profilePic from '../../assets/claire2.JPG'

function About() {
    return (
        <section className="row about">
            <div className="col-md d-flex justify-content-center align-items-center about-txt-div">
                <p className="about-text"> Hi! I'm a developer currently enrolled in the Coding Bootcamp at UT. I can build a website from
                scratch using HTML and CSS, and I will soon be a Javascript queen as well. Outside of coding I'm an
                avid guitar-player, and have toured internationally with multiple bands. I am always interested in
                learning and experincing new things, and am looking forward to expanding my portfolio as the
                bootcamp continues!
                </p>
            </div>
            <div className="col-md d-flex justify-content-center about-pic">
                <img src={profilePic} className="pic rounded" alt="Claire Puckett" id="profile-pic" />
            </div>
        </section>
    )
}

export default About