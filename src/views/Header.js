import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, ButtonGroup, Button, Typography } from "@mui/material";
import { useStyles } from "../styles";

const Header = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    return (
        
            <AppBar className={classes.AppBar}>
                <Typography variant="h2">Don Barto</Typography>
                <Typography variant="h4">Web Devlopement</Typography>
                <ButtonGroup variant="contained" aria-label="text button group" >
                    <Button className={classes.button} onClick={() => navigate("/")} >Main</Button>
                    <Button className={classes.button} onClick={() => navigate("/projects")}>Projects</Button>
                    <Button className={classes.button} onClick={() => navigate("/about")} >About</Button>
                    <Button className={classes.button} onClick={() => navigate("/contact")} >contact</Button>
                </ButtonGroup>
                
            </AppBar>
        
    )
}

export default Header;