import React from "react";
// import { Outlet, Link } from 'react-router-dom';
import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";



const App = () => {
    const classes = useStyles();
    return (
        
            <div className={classes.container}>
              
                <Card className={classes.card} >
                    <Typography variant="h3" align='center'>
                            Don Barto | Web Devlopment
                        </Typography>
                    <CardContent>
                        <Typography paragraph align='center'>
                        As a seasoned media professional, I see the true scope of what connected people and devices can accomplish, and it is astounding. Delivering applications via these connections will propel us to new heights. I want to be on that ride.
                        </Typography>
                    </CardContent>
                </Card>
                
            </div>

    )
}

export default App;