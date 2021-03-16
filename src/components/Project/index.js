import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import {CardMedia} from "@material-ui/core";
// import CardActionArea from '@material-ui/core/CardActionArea';
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
            description: "a social site for musicians and listeners to connect through music and conversation, with the ability to create profiles and buy songs. Tools: React.js, MongoDB, Mongoose, GraphQL, Material UI, Context API, AWS, JWT",
            href: "https://fairstreem.herokuapp.com/",
            imgFileName: "fairstreem.png",
            github: "https://github.com/Team-Dreem/fairstreem-mern"
        },
        {
            title: "Mixr",
            description: "A project management app for musicians that allows you to upload songs with description and file. You can organize files into project folders, and give your account info to bandmates to contribute. Tools: jQuery, Handlebars.js, MySQL2, Sequelize, bcrypt, Materialize, Express ",
            href: "https://afternoon-reef-59917.herokuapp.com/",
            imgFileName: "mixr-2.jpg",
            github: "https://github.com/redteam5/mixer"

        },

        {
            title: "Citizen Portal",
            description: "a user-friendly search app that provides easy access to information about political representatives based on user's provided address. Tools: Google Civics API, jQuery, Bulma ",
            href: "https://teamgreeenlantern.github.io/citizen-portal/index.html",
            imgFileName: "citizen-portal.jpg",
            github: "https://github.com/TeamGreeenLantern/citizen-portal"
        },
        

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

 