import React, {useState} from "react";

function Project(){

    const [projects] = useState([
        {
            title: "Mixr",
            description: "project management app for musicians",
            imageSrc: "../../assets/project-images/placeholder cat.jpg"
        },
        {
            title: "run buddy",
            description: "whatever"
        }
    ])


    return(
        <>
<div className= "flex-row">
      {/* produce a grid of all projects */}
            {projects.map((project, i)=> (
                  <img
                  src="../../assets/project-images/placeholder-cat.jpg"
                  alt={project.title}
                  className = "img-thumbnail mx-1"
                  onClick={() => toggleModal(image, i)}
                  key={project.title}
                />

            ))}
      
        </div>
        </>
    )
}

export default Project

