import React from "react";
import Project from '../Project';

function Nav(props) {

    function returnName(){
        console.log("test");
        
    }
    
    return (
        <nav className="sticky-top navbar-light bg-light nav">
            <a className="navbar-brand" href="#">Claire Puckett</a>
            <a className="nav-link" href="#">About Me</a>
            <a className="nav-link" onClick={returnName} href="#">Portfolio</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link" href="#">Resume</a>
        </nav>
    )
}

export default Nav