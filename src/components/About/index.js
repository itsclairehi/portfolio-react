import React from 'react'
import profilePic from '../../assets/claire2.JPG'

function About() {
    return (
        <section className="row about">
            <div className="col-md d-flex justify-content-center align-items-center about-txt-div">
                <p className="about-text"> Junior developer looking to expand skills and grow within the ever-changing industry of full-stack web development. Through my background in music and music management, I have cultivated skills in critical thinking, problem-solving on the fly and under pressure, a self-sufficient work ethic, collaboration, and creativity, all of which provide a unique lens through which I can contribute to the tech industry.  I recently graduated from the University of Texas at Austin bootcamp for full-stack web development, where I honed proficiency in JavaScript, CSS, React.js, GraphQL, MongoDB, and more, resulting in a versatile toolbox for dreaming up and executing MERN applications. Our final project is a fully-functioning social media app geared towards musicians and their fans that allows for text interaction using MongoDB and GraphQL, and the uploading of avatars and music using the database as reference, while files are stored in AWS. I look forward to continuing to expand my skill set, solving problems, and getting creative with a team. 
                </p>
            </div>
            <div className="col-md d-flex justify-content-center about-pic">
                <img src={profilePic} className="pic rounded" alt="Claire Puckett" id="profile-pic" />
            </div>
        </section>
    )
}

export default About