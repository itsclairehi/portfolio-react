import React, {useState} from "react";

function Project(){

    const [projects] = useState([
        {
            title: "Mixr",
            description: "project management app for musicians",
            href:"https://www.google.com",
            filename:"kitty"
        },
        {
            title: "run buddy",
            description: "whatever",
            href:"https://www.google.com",
            filename: "githubLogo"
        }
    ])
//when project element is clicked it goes to the deployed site
    function goToDeploy(href){ 
        window.location.href=href
    }


    return(
        
<div className= "flex-row">
      {/* produce a grid of all projects */}
            {projects.map((project, i)=> (
                  <img
                  src={require(`../../assets/project-images/${project.filename}.jpg`).default}
                  alt={project.title}
                  className = "img-thumbnail mx-1"
                  onClick={()=>goToDeploy(project.href)}
                  key={project.title}
                />

            ))}
      
        </div>
        
    )
}

export default Project;

