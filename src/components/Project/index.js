import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import {CardMedia} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Project() {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();

    const [projects] = useState([
        {
            title: "Fairstreem",
            description: "a social site for musicians and listeners to connect through music and conversation, with the ability to create profiles and buy songs",
            href: "https://fairstreem.herokuapp.com/",
            imgFileName: "fairstreem.png",
            github: "https://github.com/Team-Dreem/fairstreem-mern"
        },
        {
            title: "Mixr",
            description: "project management app for musicians",
            href: "https://afternoon-reef-59917.herokuapp.com/",
            imgFileName: "mixr-2.jpg",
            github: "https://github.com/redteam5/mixer"

        },
        {
            title: "run buddy",
            description: "whatever",
            href: "https://www.google.com",
            imgFileName: "kitty.jpg"
        },
        {
            title: "Citizen Portal",
            description: "Get to know your representatives!",
            href: "https://teamgreeenlantern.github.io/citizen-portal/index.html",
            imgFileName: "citizen-portal.jpg",
            github: "https://github.com/TeamGreeenLantern/citizen-portal"
        },
        {
            title: "deep thoughts",
            description: "a social forum page that allows users to comment, reply, and friend each other",
            href: "https://itsclairehi.github.io/deep-thoughts/",
            imgFileName: "kitty.jpg",
            github: "https://github.com/itsclairehi/deep-thoughts"
        },
        {
            title: "Weather Dashboard",
            description: "a handy weather app for all your curiosities of sun and wind!",
            href: "https://itsclairehi.github.io/weather-dashboard/",
            imgFileName: "weather.png",
            github: "https://github.com/itsclairehi/weather-dashboard"
        }


    ])
    //when project element is clicked it goes to the deployed site
    function goToDeploy(href) {
        window.location.href = href
    }


    return (
        <Grid container spacing={6}>
            {projects.map((project, i) => (
                <Grid item component={Card} xs={12} sm={6} md={4} className="content">
                    <CardMedia
                        component="img"
                        alt={project.title}
                        image={require(`../../assets/project-images/${project.imgFileName}`).default}
                        height="140"
                        className="img-thumbnail mx-1"
                        onClick={() => goToDeploy(project.href)}
                        key={project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {project.title}
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.description}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button 
                        size="small" 
                        color="primary"
                        onClick={() => goToDeploy(project.href)}
                        >
                            Deployed App
                        </Button>
                        <Button size="small" color="primary">
                            <a href={project.github}>
                            Github Repo
                            </a>
                        </Button>
                        </CardActions>
                </Grid>
            ))}

                </Grid>

            )      
}

export default Project;

   // {/* <div className= "row"> */}
        //   {/* produce a grid of all projects */}

        //         {/* {projects.map((project, i)=> (
        //             <div className="project col-sm col-md-6">
        //               <img
        //               src={require(`../../assets/project-images/${project.imgFileName}.jpg`).default}
        //               alt={project.title}
        //               className = "img-thumbnail mx-1"
        //               onClick={()=>goToDeploy(project.href)}
        //               key={project.title}
        //             />
        //             </div>

        //         ))}

        //     </div> */}