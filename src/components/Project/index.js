import React, {useState} from "react";

function Project(){

    const [projects] = useState([
        {
            title: "Mixr",
            description: "project management app for musicians",
            href:"https://afternoon-reef-59917.herokuapp.com/",
            imgFileName:"mixr"
        },
        {
            title: "run buddy",
            description: "whatever",
            href:"https://www.google.com",
            imgFileName: "kitty"
        },
        {
            title: "Citizen Portal",
            description: "Get to know your representatives!",
            href:"https://teamgreeenlantern.github.io/citizen-portal/index.html",
            imgFileName:"citizen-portal"
        }
    ])
//when project element is clicked it goes to the deployed site
    function goToDeploy(href){ 
        window.location.href=href
    }


    return(
        
<div className= "row">
      {/* produce a grid of all projects */}
      
            {projects.map((project, i)=> (
                <div className="project col-sm col-md-6">
                  <img
                  src={require(`../../assets/project-images/${project.imgFileName}.jpg`).default}
                  alt={project.title}
                  className = "img-thumbnail mx-1"
                  onClick={()=>goToDeploy(project.href)}
                  key={project.title}
                />
                </div>

            ))}
      
        </div>
        
    )
}

export default Project;

