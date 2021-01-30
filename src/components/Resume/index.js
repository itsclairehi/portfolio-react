import React from 'react';
 

function Resume(){
    return (
        <>
        <div className="container align-items-center content">
        {/* <p>Skills</p> */}
        <div className="d-flex justify-content-between flex-wrap ">
            
            <div>
                <h2 className="skills-heading">Front-end</h2>
                <ul>
                    <li>html</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JSON</li>
                    <li>React</li>
                    <li>Material-Ui</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                    <li>WordPress</li>
                </ul>
            </div>
            <div>
                <h2 className="skills-heading">Back-end</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>GraphQL</li>
                    <li>JWT</li>
                </ul>
            </div>

            </div>
            
            <a href="https://docs.google.com/document/d/1jo2f6mjbXSGfyWMdUO_FC2-xpc96LyzV3bNF8p0XwvU/export?format=pdf" 
            className="btn btn-primary justify-self-center">View resume</a>
            
            
</div>
            </>
    )
}

export default Resume