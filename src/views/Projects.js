import React from "react";
import { Typography, Card, CardMedia, CardContent, Button, Link } from "@mui/material";
import CoronavirusTwoToneIcon from '@mui/icons-material/Coronavirus';
import { Icon } from "@mui/material";
import { portfolio } from "../data/portfolio";
import { ClassNames } from "@emotion/react";
import { useStyles } from "../styles";


const projects = portfolio;

const Projects = () => {

    const classes = useStyles();

    return (
        <div>

            <Typography variant="h1">Projects</Typography>
            {
                projects.map((project) => {
                    
                    return (
                        
                            <Card key={project.id} className={classes.card}>
                                <CardMedia 
                                    component="img"
                                    height="30%"
                                    width="auto"
                                    image={project.avatar}
                                    alt={project.name}
                                />
                                <CardContent>
                                    <Typography variant="h5">{project.name}</Typography>
                                    <Typography variant="body1" paragraph >
                                        {project.description}
                                    </Typography> 
                                </CardContent>
                                <Button href={project.url} variant="button" target="_blank" >Visit Site</Button>
                            </Card>
                        
                    )
                })
                
            }
        </div>
    )
}

export default Projects;